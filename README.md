Aplikacja Frontendowa została napisana w technologii Typescript, używającej framework ReactJS. Zastosowano narzędzie Vite do stworzenia projektu, z racji, iż CRA nie jest już oficjalnie wspierane. Aby włączyć projekt należy:
1. Sklonować repozytorium (git clone git@github.com:Krzykoz/wordle-frontend.git)
2. Zainstalować wszystkie pakiety (npm install) w głównym katalogu projektu
3. Uruchomić aplikację (npm run dev)
Po tej komendzie, aplikacja jest dostępna w przeglądarce pod adresem http://localhost:5173/.
Autentykacja dzieję się za pośrednictwem tokenu JWT. Po zarejstrowaniu, użytkownik dostaje wygenerowany token, dzieki któremu może się później zalogować. Rozgrywka działa dla każdego użytkownika, ale tylko dla zalogowanych zbierane są statystyki. W trakcje samej rozgrywki, klawisze na klawiaturze odpowiednio się podświetlają, jeżeli:
- słowa nie ma, zmiana koloru na szary
- jest w słowie, ale nie w prawidłowym miejscu - kolor zółty
- jest w słowie i w prawidłowym miejscy - kolor zielony.
Po zakończonej rozgrywce, użytkownik może ponownie zagrać. 
