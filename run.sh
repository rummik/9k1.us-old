#!/bin/zsh
port=${1:-5000}
print -n listening on http://localhost:$port/

php -t public -S 0.0.0.0:$port 2>&1 | while read j; do
	print -n ${$(grep -v ' /_auto-refresh' <<< $j):+"\n$j"}
done

# vim: set ft=zsh :
