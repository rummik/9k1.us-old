with import <nixpkgs> {};

stdenv.mkDerivation rec {
  name = "9k1.us";

  buildInputs = [
    nodejs-8_x
    (yarn.override { nodejs = nodejs-8_x; })
    foreman
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    export NODE_ENV=development
  '';
}
