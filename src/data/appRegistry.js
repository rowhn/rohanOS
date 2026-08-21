// Central registry describing every app the desktop shell knows about.
// `external` apps redirect immediately instead of opening a window.

import { profile } from './profile';

export const appRegistry = {
  resume: {
    title: 'Resume — rohan_resume.pdf',
    shortLabel: 'Resume',
    icon: 'fa-solid fa-file-lines',
    color: '#dc4b3f',
  },

  about: {
    title: 'About Me',
    shortLabel: 'About Me',
    icon: 'fa-solid fa-user',
    color: '#4fa8ff',
  },

  experience: {
    title: 'Experience',
    shortLabel: 'Experience',
    icon: 'fa-solid fa-briefcase',
    color: '#d46a1f',
  },

  projects: {
    title: 'Projects',
    shortLabel: 'Projects',
    icon: 'fa-solid fa-folder',
    color: '#dfb620',
  },

  skills: {
    title: 'Skills',
    shortLabel: 'Skills',
    icon: 'fa-solid fa-layer-group',
    color: '#7c5cff',
  },

  certifications: {
    title: 'Certifications',
    shortLabel: 'Certifications',
    icon: 'fa-solid fa-certificate',
    color: '#b98700',
  },

  contact: {
    title: 'Contact Me',
    shortLabel: 'Contact Me',
    icon: 'fa-solid fa-envelope-open-text',
    color: '#34a853',
  },

  explorer: {
    title: 'File Explorer',
    shortLabel: 'Explorer',
    icon: 'fa-solid fa-folder-open',
    color: '#ffca28',
    fit: true,
  },

  browser: {
    title: 'Google Chrome',
    shortLabel: 'Chrome',
    icon: 'fa-brands fa-chrome',
    color: '#ea4335',
    fit: true,
  },

  code: {
    title: 'VS Code',
    shortLabel: 'VS Code',
    icon: 'fa-solid fa-code',
    color: '#4fa8ff',
    fit: true,
  },

  paint: {
    title: 'Paint',
    shortLabel: 'Paint',
    icon: 'fa-solid fa-paintbrush',
    color: '#2a41eb',
    fit: true,
  },

  games: {
    title: 'Games',
    shortLabel: 'Games',
    icon: 'fa-solid fa-gamepad',
    color: '#ff5da2',
  },

  // Notes application
  notes: {
    title: 'Notes',
    shortLabel: 'Notes',
    icon: 'fa-solid fa-note-sticky',
    color: '#ffd43b',
  },

  personalize: {
    title: 'Personalize — Background',
    shortLabel: 'Personalize',
    icon: 'fa-solid fa-palette',
    color: '#e0538a',
  },

  recycle: {
    title: 'Recycle Bin',
    shortLabel: 'Recycle Bin',
    icon: 'fa-solid fa-trash-can',
    color: '#dcdcdc',
  },

  // External links — open in a new tab instead of a window
  github: {
    title: 'GitHub',
    shortLabel: 'GitHub',
    icon: 'fa-brands fa-github',
    color: '#ffffff',
    external: profile.github,
  },

  linkedin: {
    title: 'LinkedIn',
    shortLabel: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    color: '#4fa8ff',
    external: profile.linkedin,
  },
};

// Order + labels for desktop icons
export const desktopIconOrder = [
  'resume',
  'about',
  'experience',
  'projects',
  'skills',
  'certifications',
  'contact',
  'notes',
  'games',
  'github',
  'linkedin',
  'paint',
  'recycle',
];

// Pinned grid inside the Start menu
export const pinnedAppOrder = [
  'resume',
  'about',
  'experience',
  'projects',
  'skills',
  'certifications',
  'contact',
  'notes',
  'games',
  'github',
  'linkedin',
  'browser',
  'code',
  'paint',
  'explorer',
  'recycle',
];

// Fixed taskbar shortcuts
// Always visible, left of the dynamic running apps.
export const taskbarPinned = [
  'explorer',
  'browser',
  'code',
  'resume',
  'games',
];