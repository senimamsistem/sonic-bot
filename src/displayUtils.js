require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log(`
  █████╗ ██████╗ ████████╗████████╗███████╗ █████╗ ███╗   ███╗
 ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗ ████║
 ███████║██████╔╝   ██║█████╗██║   █████╗  ███████║██╔████╔██║
 ██╔══██║██╔══██╗   ██║╚════╝██║   ██╔══╝  ██╔══██║██║╚██╔╝██║
 ██║  ██║██║  ██║   ██║      ██║   ███████╗██║  ██║██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
`.cyan);
  console.log('=           Sonic Odyssey BOT          ='.cyan);
  console.log('=     Update by senimamsistem          ='.cyan);
  console.log('=               From: HCA              ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = {
  displayHeader,
};
