import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import IndexPage from 'flarum/forum/components/IndexPage';
import SiteSplash from './splash';
import { extend, override } from 'flarum/common/extend';

app.initializers.add('webbinaro/flarum-site-splashpage', () => {
  console.log('[webbinaro/flarum-site-splashpage] Hello, forrrrum!');
  
});


extend(DiscussionPage.prototype, 'pageContent', (items) => { 
  
  console.log(items)
  items.add('agebox', <SiteSplash consentMessage="Yes"/>);
  return items;
});
