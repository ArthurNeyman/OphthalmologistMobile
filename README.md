# OphthalmologistMobile
Интрукция по запуску:
Необходимо чтобы было устновлено следующее ПО:
 - NodeJs https://nodejs.org/ru/
 - Android Studio и эмулятор и SDK https://developer.android.com/studio/run/emulator
 - Android Sdk

Запуск проекта
 1. Отрыть коренную папку проекта  в среде разработки (например VSCode android\app\build\outputs\apk\release)
 3. Выполнить команду npm install
 4. В файле Ophthalmologist\android\local.properties указать путь к Android Sdk (по типу sdk.dir="D\:\\Program_files\\sdk")
 5. Для запуска версии разработчика выполнить команду npm run android
 6. Для сборки apk версии приложения перйти в папку android и выполнить команду ./geadlew assemblerelease. apk файл будет в папке ...\android\app\build\outputs\apk\release
