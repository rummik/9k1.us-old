#!/bin/zsh

function -lazyJSON {
	print -r -- $(grep -Po "(?<=\"$1\":\")(\\\\.|[^\"])+" <<< $response)
}

function -9k1push {
	local response="$(curl -s -F "key=$api_key" -F "data=@-" $url)"
	local error="$(-lazyJSON error)"

	[[ -n "$file" ]] && file='/'${"$(basename $file | grep -Poi "[a-z0-9:_.-]+")"//$'\n'/_}

	if [[ -z "$error" ]]; then
		print $(-lazyJSON url)$file
	else
		print Error: $(-lazyJSON error) >&2
	fi
}

function 9k1 {
	local url=https://9k1.us
	local api_key

	source ~/.9k1rc

	local file name help

	zparseopts -D -E -- \
		n+:=name -name+:=name \
		h=help -help=help

	if [[ ! -z $help || ( -t 0 && -z "$@" ) ]]; then
		<<-EOF
		Usage:
		  $0 [options] <file|text>
		  myapp | $0 [options]

		Options:
		  -h,--help  Print this help
		  -n,--name  Name of file after pasting
		EOF

		return 1
	fi

	file=${name[-1]}

	if [[ ! -t 0 ]]; then
		print Slurping input from STDIN... >&2
		-9k1push
	elif [[ -f "$@" ]]; then
		print Uploading "$@"... >&2
		file="${name[-1]:-$@}"
		cat "$@" | -9k1push
	elif [[ -n "$@" ]]; then
		print Pasting "\"$@\""... >&2
		print -n "$@" | -9k1push
	fi
}

