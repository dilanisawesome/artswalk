import {proxy } from 'valtio'

const state = proxy({
    intro: false,
    color: '#0868A3',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state