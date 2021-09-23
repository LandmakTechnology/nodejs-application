#!/usr/bin/env sh



echo 'The following "npm" command runs your Node.js application'

set -x
npm start & # for it to run in the background
sleep 1
echo $! > .pidfile  # echo $! will show the scripts running in the background
set +x

echo 'Now you can'
echo 'Visit http://ServerIp:9981 to see your Node.js application'
