const socket = io({autoConnect: false});
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cdWidth = 240;
const cdHeight = 360;
const cards = new Image();
const back = new Image();

let room;
let hand = [];
let turn;
let playerName;