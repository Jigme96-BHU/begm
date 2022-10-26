const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mqtt = require("mqtt");
dotenv.config({ path: './.env' });
const mqtthost = process.env.MQTT_HOST
const mqttport = process.env.MQTT_PORT

const mqtturl = `mqtt://${mqtthost}:${mqttport}`;

const client = mqtt.connect(mqtturl);

module.exports = client;
