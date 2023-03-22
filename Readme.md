# WeatherAPIHandler

Тестовое задание на основе тз: https://docs.google.com/document/d/1an4ArYIIMY_GmibhZKXjUNyYnXy8P0WBFwtXocMHPZA/edit#

## Устанавливаем Redis

- Обновляем пакеты: `sudo apt update`
- Устанавливаем redis-server: `sudo apt install redis-server`
- Открываем конфиг редиса `sudo nano /etc/redis/redis.conf`
- Находим строку и меняем: `supervised no` -> `supervised systemd`, затем сохраняемся и выходим
- Перезапускаем redis: `sudo systemctl restart redis.service`

## В корне проекта вызываем:

- `yarn`
- `npx lerna bootstrap`

## Запускаем:

- `yarn start`
