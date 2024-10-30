# KI Text-Adventure – Projektplan

## 1. Projektidee

Das KI Text-Adventure ist ein interaktives Spiel, bei dem der Spieler durch Texteingaben eine Geschichte steuert. Das Besondere an diesem Projekt ist, dass die Spielwelt sowohl textuell als auch visuell durch KI generiert wird. Die KI erstellt nicht nur die Erzählung, sondern auch die passenden Bilder zur aktuellen Spielsituation. Ziel ist es, eine immersive und dynamische Spielerfahrung zu bieten, die durch Text und Bild getragen wird.

## 2. Technische Basis

Texterzeugung (Straico): Straico bietet Zugang zu mehreren modernen Sprachmodellen (z.B. ChatGPT-4, Claude, Gemma). Es wird genutzt, um die Textinhalte für das Spiel zu generieren.

Bildgenerierung (Supermachine): Supermachine verwendet Stable Diffusion und Flux, um visuelle Darstellungen der Spielwelt zu erzeugen. Es wird über eine API eingebunden, um basierend auf der KI-Erzählung Bilder zu generieren.


## 3. Benutzererfahrung (UX)

### 3.1 Einführung und Tutorial

Ein kurzes, interaktives Tutorial führt die Spieler in die Mechaniken und Möglichkeiten des Spiels ein.

Dynamische Anleitung: Scroll-Effekte und Animationen zeigen die Spielmechaniken schrittweise.


### 3.2 Interaktivität und Steuerung

Spieler können sowohl freitextlich als auch durch Entscheidungen (aus vorgegebenen Optionen) das Spiel steuern.

Möglichkeit, den Charakter anzupassen: Zu Beginn wählt der Spieler einen Charakter und kann individuelle Eigenschaften (z.B. Aussehen) bestimmen. Diese werden sowohl im Text als auch in den Bildern reflektiert.


### 3.3 Spielwelt und Fortschritt

Spieler können jederzeit ihren Fortschritt speichern, um das Abenteuer später fortzusetzen. Dies geschieht über Benutzerkonten oder durch das Speichern von Sitzungsdaten.


## 4. Technische Umsetzung

### 4.1 Architektur und Frontend

Framework: Das Projekt wird mit React und Vite umgesetzt.

Seitennavigation: Alle Seiten haben einen fixen Header (oben rechts: Links zu Profil, Registrierung, Kontakt, About, Storys; oben links: klickbares Logo, das zur Startseite führt). Der Header bleibt beim Scrollen sichtbar.

Hintergrundbilder: Jede Seite hat einen festgelegten Hintergrund, der das gesamte Display einnimmt.


### 4.2 Seitenaufbau

Startseite: Hier wird das Spiel vorgestellt, durch Scrollen werden die Spielmechaniken dynamisch erklärt. Ein Button führt zur Story-Seite.

Profilseite: Zwei Unterseiten zeigen:

Likes: Spieler können hier gelikte Szenarien sehen.

Favoriten: Hier werden die gespeicherten Szenarien aufgelistet.


Anmeldung/Registrierung: Formular zum Erstellen eines Accounts oder zum Einloggen.

Kontaktseite: Hier kann der Spieler das Entwicklerteam kontaktieren.

About-Seite: Informationen zum Spiel und zum Entwicklerteam.

Story-Seite: Die zentrale Spielseite, auf der die Spieler eigene Szenarien erstellen oder vorgefertigte auswählen können.


### 4.3 Story-Generierung und Spielstart

Vorgefertigte Szenarien: Auf der Story-Seite werden vorgefertigte Abenteuer mit Titel, Bild, Beschreibung, Like-, Share- und Play-Buttons angezeigt. Statistiken zeigen Likes und wie oft das Szenario gespielt wurde.

Eigene Szenarien: Spieler können eine eigene kurze Beschreibung eingeben, worauf die KI basierend auf dieser Eingabe eine Story erstellt. Das erstellte Szenario kann gespeichert oder sofort gespielt werden.

Szenarien-Elemente: Jedes Szenario enthält ein Bild (von der KI generiert oder vordefiniert) sowie Like-, Share- und Play-Buttons.


### 4.4 Spieldurchführung

Nach dem Klick auf „Play“ beginnt das Abenteuer.

Rollenauswahl: Spieler wählen vor Spielbeginn eine Rolle (z.B. Krieger, Magier, Detektiv) aus. Die Auswahl beeinflusst den Verlauf der Geschichte.

Spielinterface:

Hintergrundbild: Die KI generiert Bilder basierend auf der Beschreibung des Szenarios.

Textfeld: Der Spieler kann hier seine Eingaben machen, um die Handlung zu beeinflussen.

Speicherfunktion: Der Spieler kann jederzeit den bisherigen Spielverlauf speichern (lokal als PDF).

Weiter-Symbol: Spieler können die Geschichte fortschreiben lassen, indem sie auf „Weiter“ klicken.

Senden-Symbol: Alternativ kann der Spieler eigene Anweisungen eingeben, um die Handlung zu verändern.



## 5. Geschichte und Welten

### 5.1 Dynamische Erzählstruktur

Verzweigte Erzählungen: Jede Entscheidung, die der Spieler trifft, beeinflusst die Handlung. Es gibt unterschiedliche Enden und Wege, die erkundet werden können.

Mehrere Genres: Spieler können zwischen Fantasy, Science-Fiction, Mystery und anderen Genres wählen, um ihre Vorlieben zu berücksichtigen.

Dynamische Welten: Die Spielwelt verändert sich dynamisch basierend auf den Handlungen der Spieler.


### 5.2 Bilder und Visuals

Stilrichtlinien: Die KI-generierten Bilder sollen stilistisch konsistent sein. Ein moderner, einheitlicher visueller Stil sorgt für ein kohärentes Spielerlebnis.

Detailgrad: Szenenbilder werden abhängig von der Spielhandlung angepasst. Bewegungsreiche Szenen sind dynamisch und actionreich, während ruhige Momente mehr Detail erhalten.


## 6. Backend und Optimierung

### 6.1 API-Kontingente

Optimierung der Anfragen: Um die API-Kontingente effizient zu nutzen, werden Texte und Bilder nur bei wichtigen Szenen generiert. Unnötige Bild-Generierungen werden vermieden.


### 6.2 Speicherung und Fortsetzung

Fortschritt wird durch Benutzerkonten gesichert. Spieler können jederzeit auf gespeicherte Szenarien zugreifen und weiterspielen.


## 7. Design und Animationen

### 7.1 Dynamische Einführung

Die dynamische Erklärung der Spielmechanik auf der Startseite wird durch Scroll-Animationen unterstützt.

Animationen und Design: Alle Animationen werden in einer separaten CSS-Datei definiert, um für klare Struktur und Wiederverwendbarkeit zu sorgen.


## 8. Verbesserungen und Fehlerkorrekturen

Vereinheitlichung des Designs: Alle UI-Elemente sollten durchgehend einheitlich gestaltet sein, um eine benutzerfreundliche Navigation zu gewährleisten.





