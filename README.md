# GeolocalisationExercice
# Lancer un projet React Native (projet vide)
## Créer un projet vide
Créer un projet React Native avec un template minimal :

npx create-expo-app MonProjet --template blank

Entrer dans le dossier du projet :
cd MonProjet
Lancer le projet
Démarrer le serveur de développement :
npx expo start
Puis :
scanner le QR code avec l'application Expo Go

## Installer la navigation
Attention ne pas oublier de mettre expo pour les instalation de depandance !! 

Installer les dépendances React Navigation :

```bash
npm install @react-navigation/native @react-navigation/native-stack

## Installer react-native-screens

Installer la bibliothèque qui améliore la gestion des écrans et les performances de navigation :

```bash
npm expo install react-native-screens


## Installer Safe Area Context

Installer la dépendance nécessaire pour la gestion des zones sûres sur mobile :

```bash
npx expo install react-native-safe-area-context


## Installation d'EAS CLI

EAS CLI (Expo Application Services Command Line Interface) est un outil en ligne de commande qui permet de **construire, déployer et gérer vos applications Expo** plus facilement, notamment pour les builds sur Android et iOS, la gestion des certificats et la publication.

Pour l’installer globalement sur votre machine, utilisez la commande suivante dans le terminal :

```bash
npm install -g eas-cli



