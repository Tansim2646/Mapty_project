'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// Geolocation Api
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        const coordinates = [latitude,longitude];
        // Leaflet library entry point
        const map = L.map('map').setView(coordinates,13);
        console.log(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
        L.marker(coordinates).addTo(map);
        

    },
        () => {
            alert("Please allow location in browser");
        })
}