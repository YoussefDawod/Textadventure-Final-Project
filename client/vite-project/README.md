# React + Vite

# Frontend

## 1. Startseite (Homepage)

Die Startseite zeigt folgende Elemente, die rechts neben dem Profilbereich oben in einer horizontalen Leiste angeordnet sind. Nur das Logo bleibt oben links:

Logo: Oben links. Klickbar und führt den Benutzer immer zur Startseite zurück.

Profilbereich: Direkt neben dem Logo, oben rechts. Der Benutzer kann hier auf seine gespeicherten und gelikten Storys zugreifen (wenn er eingeloggt ist).

Story-Bereich: In der horizontalen Leiste neben dem Profilbereich. Klickt der Benutzer darauf, wird er zu einer Liste von vorgefertigten Storys (Szenarien) und der Möglichkeit, eigene Storys zu erstellen, weitergeleitet.

About: Ebenfalls in der horizontalen Leiste. Hier wird das Spiel und das Entwicklerteam beschrieben.

Kontakt: Ein Button in der Leiste, der den Benutzer zu einer Kontaktseite weiterleitet, wo er das Entwicklerteam kontaktieren kann.

Registrierung und Anmeldung: In der gleichen Leiste, wo der Benutzer sich registrieren oder anmelden kann.


### Hinweise:

Diese obere Leiste mit den Elementen bleibt auf allen Seiten sichtbar und verschwindet nicht beim Scrollen.

Die Seite hat ein Hintergrundbild, das vom Entwickler festgelegt wird. Jeder Bereich kann ein eigenes Hintergrundbild haben.



---

## 2. Dynamische Erklärung des Spiels

Auf der Startseite wird das Spiel in kleinen Schritten erklärt. Diese Schritte werden beim Scrollen dynamisch mit Animationen (CSS) angezeigt.

Am Ende der Erklärung gibt es einen Button, der den Benutzer in den Story-Bereich führt, damit er eine Story auswählen und das Spiel starten kann.

Der Footer enthält kleine Informationen wie das Erstellungsdatum und die Entwickler. Er bleibt auf allen Seiten sichtbar.



---

## 3. Storys (Szenarien)

Der Story-Bereich zeigt vorgefertigte Szenarien, und es gibt die Möglichkeit, eine eigene Story zu erstellen:

Vorgefertigte Storys: Diese folgen der standardisierten Struktur wie vorher beschrieben (Bild, Titel, Beschreibung, Like, Share, Play, Statistiken).

Eigene Story erstellen:

Der Benutzer gibt eine kurze Beschreibung ein (z.B. Thema, Charaktere, Schauplatz).

Die KI erstellt daraufhin eine Story, die die gleichen Schritte wie bei den vorgefertigten Szenarien durchläuft, einschließlich Rollenauswahl und dem schrittweisen Story-Verlauf.




---

## 4. Spiel (Szenario) starten

Nach dem Klick auf Play beginnt das Spiel. Der Ablauf bleibt wie zuvor beschrieben:

KI-generiertes Hintergrundbild: Basierend auf der Story-Beschreibung oder dem Titel erstellt die KI ein passendes Hintergrundbild.

Rollenauswahl: Vor dem Start wählt der Benutzer seine Rolle.

Spielbildschirm:

Oben links: Speichern-Symbol, um die Story als PDF zu speichern.

Oben links: X-Symbol, um das Spiel zu beenden.

Unten: Eingabefeld, Weiter- und Senden-Symbole für den Story-Verlauf.




---

## 5. Frontend mit React und Vite

Das gesamte Frontend wird mit React und Vite entwickelt. Die Schritte sind:

1. Initialisierung des React-Projekts mit Vite.


2. Erstellung der Hauptkomponenten:

Header für die Navigationselemente (Logo, Profil, Story-Bereich, About, Kontakt, Anmeldung).

StoryList für die Anzeige der Storys.

StoryCreator für die Erstellung eigener Storys.

GamePlay für das Spielerlebnis.

Footer für allgemeine Informationen.



3. Routing mit React Router zur Navigation zwischen den Seiten.


4. State Management für Benutzerstatus und Story-Daten.


5. Styling und Animationen in einer separaten CSS-Datei.


6. Implementierung der KI-Funktionalitäten für die Story-Erstellung, Rollenauswahl und den Story-Verlauf.




---

### Zusammenfassung der Entwicklungsschritte

1. React-Projekt mit Vite starten.


2. Erstellung des Headers mit Navigationselementen (Story-Bereich, About, Kontakt, Anmeldung) rechts neben dem Profilbereich.


3. Komponentenstruktur entwickeln: StoryList, StoryCreator, GamePlay, Footer.


4. React Router implementieren für die Navigation.


5. KI-Integration für die dynamische Story-Erstellung und den Spielverlauf.


6. CSS-Design und Animationen für dynamische Erklärungen und Layout.