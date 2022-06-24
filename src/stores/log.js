import { writable } from 'svelte/store';

export const messageLogStore = writable({dateLog: new Date().toLocaleDateString('fr-FR', {year:"2-digit", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", second:"2-digit"}), message : "Démarrage du jeu."});

