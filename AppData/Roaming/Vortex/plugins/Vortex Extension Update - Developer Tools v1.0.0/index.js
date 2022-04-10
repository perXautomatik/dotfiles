function init(context) {
  context.registerAction('global-icons', 300, 'settings', {}, 'Developer Tools', () => {
    require('electron').remote.getCurrentWebContents().toggleDevTools();
  });

  return true;
}

exports.default = init;
