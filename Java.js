

var snack = []

    snack[1] = 'Bag of mixed candy';
    snack[2] ='Doritoz';
    snack[3] = 'Smash';
    snack[4] = 'Pringles';
    snack[5] = 'Popcorn';
    snack[6] = 'Gott och Blandat';
    snack[7] = '"Nappar"';
    snack[8] = 'Kryptonites';
    snack[9] = 'Kikos';
    snack[10] = 'Chinese Puffs'; 
    snack[11] = 'Fizzy Bubblizz';
    snack[12] = 'Polly';
    snack[13] = 'Dragsters';
    snack[14] = 'Tyrkish Peber';
    snack[15] = 'Ahlgrens Cars';
    snack[16] = 'Foam Santas';
    snack[17] = 'Peace Signs';
    snack[18] = 'Snöre';
    snack[19] = 'Kexchoklad';
    snack[20] = 'Darkchocolate';
    snack[21] = 'Wasabi Nuts';
    snack[22] = 'Sourcream and onion chips';
    snack[23] = 'Vegetables Sticks and dip';
    snack[24] = 'Marabou Chocolate Bar';
    snack[25] = 'Nachos and Salsa';
    snack[26] = 'Häagen-Dazs Strawberry';
    snack[27] = 'B&Js Halfbaked';
    snack[28] = 'Dumle Lillipop';
    snack[29] = 'Tutti Frutti';
    snack[30] = 'Skulls';
    snack[31] = 'Nature Candy';
    snack[32] = 'Jungleroar';
    snack[33] = 'Cheez Doodles';
    snack[34] = 'Cheez Cruncherz';

function Snack() {
    var randomSnack = Math.floor(Math.random()*(snack.length));
    document.getElementById('psnack').innerHTML = snack[randomSnack];
}
