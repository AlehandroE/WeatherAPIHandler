# WeatherAPIHandler

Тестовое задание на основе тз: https://docs.google.com/document/d/1an4ArYIIMY_GmibhZKXjUNyYnXy8P0WBFwtXocMHPZA/edit#

## Устанавливаем Redis

- `sudo apt update`
- `sudo apt install redis-server`
  Открываем конфиг редиса
- `sudo nano /etc/redis/redis.conf`
  и меняем:
- `supervised no` -> `supervised systemd`
- сохраняемся и выходим
- `sudo systemctl restart redis.service`

## В корне проекта вызываем:

- `yarn`
- `npx lerna bootstrap`

## Запускаем:

- `yarn start`
