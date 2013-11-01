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
	local url=http://9k1.us
	local api_key

	source ~/.9k1rc

	local file

	if [[ ! -t 0 ]]; then
		print Slurping input from STDIN... >&2
		-9k1push
	elif [[ -f "$@" ]]; then
		print Uploading "$@"... >&2
		file="$@"
		cat "$@" | -9k1push
	elif [[ -n "$@" ]]; then
		print Pasting "\"$@\""... >&2
		print -n "$@" | -9k1push
	else
		print Nothing to do >&2
		return 1
	fi
}

