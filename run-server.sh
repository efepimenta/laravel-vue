#!/bin/bash
php -S 0.0.0.0:8000 -t api &
PHP=`pgrep -f "php -S"`

lite-server rad
LITE=`pidof lite-server`

kill -9 <<< echo $LIT
kill -9 <<< echo $PHP