app.initializers.add('webbinaro/flarum-age-check', () => {
  console.log('[webbinaro/flarum-age-check] Hello, admin!');

  app.extensionData
  .for('webbinaro-age-check')
  .registerSetting(
    {
      defaultValue: 'Yes',
      setting: 'webbinaro-age-check.labels.buttons.yes', // This is the key the settings will be saved under in the settings table in the database.
      label: app.translator.trans('webbinaro-age-check.admin.labels.buttons.yes'), // The label to be shown letting the admin know what the setting does.
      help: app.translator.trans('webbinaro-age-check.admin.labels.buttons.yes_help'), // Optional help text where a longer explanation of the setting can go.
      type: 'text', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
    },
    30 // Optional: Priority
  )
  .registerSetting(
    {
      defaultValue: 'No',    
      setting: 'webbinaro-age-check.labels.buttons.no', // This is the key the settings will be saved under in the settings table in the database.
      label: app.translator.trans('webbinaro-age-check.admin.labels.buttons.no'), // The label to be shown letting the admin know what the setting does.
      help: app.translator.trans('webbinaro-age-check.admin.labels.buttons.no_help'), // Optional help text where a longer explanation of the setting can go.
      type: 'text', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
    },
    31 // Optional: Priority
  )
  .registerSetting(
    {
      defaultValue: 'By clicking "Yes", you agree to be over the age of 21 with legal right to cultivate and process cannabis.',
      setting: 'webbinaro-age-check.labels.messages.consent_prompt', // This is the key the settings will be saved under in the settings table in the database.
      label: app.translator.trans('webbinaro-age-check.admin.labels.messages.consent_prompt'), // The label to be shown letting the admin know what the setting does.
      help: app.translator.trans('webbinaro-age-check.admin.labels.messages.consent_prompt_help'), // Optional help text where a longer explanation of the setting can go.
      type: 'text', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
    },
    29 // Optional: Priority
  )
  .registerSetting(
    {
      defaultValue: 'This admin is only for use in states where the cultivation and processing of cannabis is legal.',
      setting: 'webbinaro-age-check.labels.messages.left_blurb', // This is the key the settings will be saved under in the settings table in the database.
      label: app.translator.trans('webbinaro-age-check.admin.labels.messages.left_blurb'), // The label to be shown letting the admin know what the setting does.
      help: app.translator.trans('webbinaro-age-check.admin.labels.messages.left_blurb_help'), // Optional help text where a longer explanation of the setting can go.
      type: 'text', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
    },
    50 // Optional: Priority
  )
  .registerSetting(
    {
      defaultValue: '',
      setting: 'webbinaro-age-check.labels.messages.left_blurb_background', // This is the key the settings will be saved under in the settings table in the database.
      label: app.translator.trans('webbinaro-age-check.admin.labels.messages.left_blurb_background'), // The label to be shown letting the admin know what the setting does.
      help: app.translator.trans('webbinaro-age-check.admin.labels.messages.left_blurb_background_help'), // Optional help text where a longer explanation of the setting can go.
      type: 'url', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
    },
    50 // Optional: Priority
  )
});
