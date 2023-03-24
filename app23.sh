#!/bin/bash

start() {
  status
  if [ "$isWorking" = "" ]; then
    echo "starting the server"
    setsid npm run --silent dev > ./logs/server.log &
    echo "(_-¯λ¯-_SERVER STARTED_-¯λ¯-_)"
    exit 0;
  else 
    echo "nodejs-server is ALREADY RUNNING";
  fi
  exit 0;
}

stop() {
  status
  if [ "$isWorking" = "" ]; then
    echo "nodejs-server is NOT RUNNING";
  else 
    echo "stopping the server";
    npm run --silent stop &&
    echo "(_-¯λ¯-_SERVER STOPPED_-¯λ¯-_)";
    echo "\n"
  fi
}

restart() {
  stop &&
  start;
}

status() {
  isWorking=$(lsof -i :3000|grep "node");
  echo "$isWorking"
  if [ "$isWorking" = "" ]; then
    echo "nodejs-server is NOT RUNNING"
  else 
    echo "nodejs-server is RUNNING";
  fi
}

logs() {

  fl=`(ls logs/lambda/ | grep -oP "($1[\s-\w]*.log)")`;
  if [ "$fl" != "" -a "$1" != "" ]; then
    echo "$1 ==> logs/lambda/$fl"
    tail -n 100 -f logs/lambda/$fl
  else
    echo "==> server.log"
    tail -n 100 -f logs/server.log
  fi
}

console() {
  status
  if [ "$isWorking" = "" ]; then
    echo "starting the server"
    echo "(_-¯λ¯-_SERVER STARTED IN CONSOLE_-¯λ¯-_)"
    npm run console
  else 
    echo "nodejs-server is ALREADY RUNNING";
  fi
}

case $1 in 
  "start") start;;
  "stop") stop;;
  "restart") restart;;
  "status") status;;
  "console") console;;
  "logs") shift && logs $@
  ;;
  *) echo " Please use below options as args \n status (or) start (or) stop (or) logs"
esac
