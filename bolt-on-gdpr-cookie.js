/*! bolt-on-gdpr-cookie v1.0.0
 * MIT License - https://github.com/nopejp/bolt-on-gdpr-cookie/blob/main/LICENSE
 * Copyright (c) 2023 NOPE Office */

(function() {

'use strict';

function get_cookie(name) {
  const arr = document.cookie.split(';');
  for (const value of arr) {
    const content = value.split('=');
    if (content[0].trim() == name) {
      return decodeURIComponent(content[1].trim());
    }
  }
  return '';
}
function set_cookie(name, value, max_age) {
  document.cookie = name + '=' + encodeURIComponent(value) + '; max-age=' + max_age + ';';
}

// --

const lang               = typeof bogc_lang               !== 'undefined' ? bogc_lang               : 'en';
const privacy_policy_url = typeof bogc_privacy_policy_url !== 'undefined' ? bogc_privacy_policy_url : '';
const delay              = typeof bogc_delay              !== 'undefined' ? bogc_delay              : 2;
const cookie_name        = typeof bogc_cookie_name        !== 'undefined' ? bogc_cookie_name        : '__gdpr_cookie';
const cookie_max_age     = typeof bogc_cookie_max_age     !== 'undefined' ? bogc_cookie_max_age     : 60*60*24 * 400;
const font_family        = typeof bogc_font_family        !== 'undefined' ? bogc_font_family        : '"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif';
const button_color       = typeof bogc_button_color       !== 'undefined' ? bogc_button_color       : '#27acd9';

const cookie = get_cookie(cookie_name);
if (cookie) return;

const surface_text = {
  en: {
    band_text:    'Our service uses Cookies to improve your experience on our website, personalize content and ads, and analyze traffic. '
                + 'Details of the purpose of use and the types of Cookies used can be found on the <a id="bogc-privacy-policy" target="_blank" rel="noopener">privacy policy</a> page. '
                + 'To customize your cookie settings for this service, click [Customize settings].',
    btn_accept:   'Accept all cookies',
    btn_custom:   'Customize settings',
    mdl_title:    'Cookie Settings',
    mdl_desc1:    'When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. '
                + 'This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. '
                + 'The information does not usually directly identify you, but it can give you a more personalized web experience.',
    mdl_desc2:    'Because we respect your right to privacy, you can choose not to allow some types of cookies. '
                + 'Click on the different category headings to find out more and manage your preferences. '
                + 'Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.',
    mdl_button:   'Save Settings',
    sc_name:      'Strictly Necessary',
    sc_note:      'These cookies are necessary for our website to function properly and cannot be switched off in our systems. '
                + 'They are usually only set in response to actions made by you which amount to a request for services, '
                + 'such as setting your privacy preferences, logging in or filling in forms or where they’re essential '
                + 'to provide you with a service you have requested. You cannot opt-out of these cookies. '
                + 'You can set your browser to block or alert you about these cookies, but if you do, some parts of the site '
                + 'will not then work. These cookies do not store any personally identifiable information.',
    pc_name:      'Performance Cookies',
    pc_note:      'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. '
                + 'They help us to know which pages are the most and least popular and see how visitors move around the site, '
                + 'which helps us optimize your experience. All information these cookies collect is aggregated and therefore anonymous. '
                + 'If you do not allow these cookies we will not be able to use your data in this way.',
    fc_name:      'Functional Cookies',
    fc_note:      'These cookies enable the website to provide enhanced functionality and personalization. '
                + 'They may be set by us or by third party providers whose services we have added to our pages. '
                + 'If you do not allow these cookies then some or all of these services may not function properly.',
    tc_name:      'Targeting Cookies',
    tc_note:      'These cookies are used to make advertising messages more relevant to you and may be set through our site '
                + 'by us or by our advertising partners. They may be used to build a profile of your interests and '
                + 'show you relevant advertising on our site or on other sites. They do not store directly personal information, '
                + 'but are based on uniquely identifying your browser and internet device.',
  },
  ja: {
    band_text:    '本サービスではウェブサイトでの体験の向上、コンテンツや広告のパーソナライズ、トラフィックの分析のために、Cookieを使用しています。'
                + '使用目的の詳細や使用するCookieの種類については<a id="bogc-privacy-policy" target="_blank" rel="noopener">プライバシーポリシー</a>のページで確認できます。'
                + '本サービスのCookie設定をカスタマイズするには、[設定をカスタマイズする]をクリックしてください。',
    btn_accept:   'すべて許可する',
    btn_custom:   '設定をカスタマイズする',
    mdl_title:    'Cookieの設定',
    mdl_desc1:    '本サービスのWebサイトにアクセスすると、ほとんどの場合Cookieの形式で、ブラウザーに情報が保存または取得される場合があります。'
                + 'この情報は、あなたやあなたの好み、またはデバイスに関するものである可能性があり、主にサイトを期待どおりに機能させるために使用されます。'
                + 'この情報は通常、あなたを直接特定するものではありませんが、よりパーソナライズされたWebエクスペリエンスを提供することができます。',
    mdl_desc2:    '本サービスではお客様のプライバシーの権利を尊重するため、一部の種類のCookieを許可しないことを選択できるようにしています。'
                + 'それぞれのカテゴリの見出しをクリックして、詳細を確認し、設定を管理してください。'
                + '一部の種類のCookieをブロックすると、サイトのエクスペリエンスや提供できるサービスに影響を与える可能性があることに注意してください。',
    mdl_button:   '設定を保存する',
    sc_name:      '必須 Cookie',
    sc_note:      'これらのCookieは、本サービスのWebサイトが適切に機能するために必要であり、このシステムでオフにすることはできません。'
                + 'これらは通常、プライバシー設定の設定、ログインまたはフォームへの入力、または要求したサービスを提供するために不可欠な場合など、'
                + 'サービスの要求に相当するユーザーのアクションに応じてのみ設定されます。これらのCookieは、個人を特定できる情報を保存しません。',
    pc_name:      'パフォーマンス Cookie',
    pc_note:      'これらのCookieを使用すると、ユーザーとトラフィックソースをカウントできるため、サイトのパフォーマンスを測定および改善できます。'
                + 'それらは、人気のあるページと人気のないページを把握したり、ユーザーがサイト内をどのように移動するかを把握するのに役立ち、'
                + 'ユーザーのエクスペリエンスを最適化するのに役立ちます。これらのCookieが収集するすべての情報は集約され匿名化されます。',
    fc_name:      '機能性 Cookie',
    fc_note:      'これらのCookieにより、ウェブサイトの機能が強化され、パーソナライズが可能になります。それらは、本サービスまたは本サービスのページに'
                + 'サービスを追加したサードパーティプロバイダーによって設定される場合があります。これらのCookieを許可しない場合、'
                + 'これらのサービスの一部またはすべてが正しく機能しない可能性があります。',
    tc_name:      'ターゲッティング Cookie',
    tc_note:      'これらのCookieは、広告メッセージをより関連性の高いものにするために使用され、本サービスまたは本サービスの広告パートナーによって'
                + '本サービスのサイトを通じて設定される場合があります。それらは、あなたの興味のプロファイルを作成し、本サービスのサイトまたは他のサイトで'
                + '関連する広告を表示するために使用される場合があります。それらは個人情報を直接保存するのではなく、ブラウザとインターネットデバイスを'
                + '一意に識別することに基づいています。',
  },
};

const style = $(`
<style>
.bogc_band {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  font-family: ${font_family};
  font-size: 14px;
}
@media screen and (max-width: 1200px) {
  .bogc_band {
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .bogc_band {
    height: 250px;
    font-size: 14px;
  }
}
@media screen and (max-width: 480px) {
  .bogc_band {
    font-size: 12px;
  }
}
@keyframes bogcFadeIn {
  from { opacity: 0; transform: translateY(150px); }
  to   { opacity: 1; transform: translateY(0);     }
}
@keyframes bogcFadeInUnder768 {
  from { opacity: 0; transform: translateY(250px); }
  to   { opacity: 1; transform: translateY(0);     }
}
@keyframes bogcFadeOut {
  from { opacity: 1; transform: translateY(0);     }
  to   { opacity: 0; transform: translateY(150px); }
}
@keyframes bogcFadeOutUnder768 {
  from { opacity: 1; transform: translateY(0);     }
  to   { opacity: 0; transform: translateY(250px); }
}
.bogc_band_fadein {
  animation: bogcFadeIn 1s ease ${delay}s 1 normal backwards;
}
.bogc_band_fadeout {
  animation: bogcFadeOut 1s ease 0s 1 normal forwards;
}
@media screen and (max-width: 768px) {
  .bogc_band_fadein {
    animation: bogcFadeInUnder768 1s ease ${delay}s 1 normal backwards;
  }
  .bogc_band_fadeout {
    animation: bogcFadeOutUnder768 1s ease 0s 1 normal forwards;
  }
}
.bogc_band_inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  padding: 10px 45px 10px 20px;
}
.bogc_band_notice {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
}
.bogc_band_notice p{
  color: #ddd;
  line-height: 1.7;
  margin: 0;
}
.bogc_band_notice p:last-child {
  width: calc(100% - 70px);
}
@media screen and (max-width: 480px) {
  .bogc_band_notice p:last-child {
    width: calc(100% - 55px);
  }
}
.bogc_band_notice p a {
  color: #ddd;
  text-decoration: underline;
}
.bogc_band_buttons {
  display: flex;
  flex-wrap: wrap;
}
.bogc_band_button {
  display: block;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  width: 180px;
  height: fit-content;
  padding: 5px;
  transition: 0.5s;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
}
@media screen and (max-width: 1200px) {
  .bogc_band_button {
    width: 150px;
    padding: 5px 3px;
    font-size: 11px;
  }
}
@media screen and (max-width: 768px) {
  .bogc_band_button {
    margin-top: 20px;
  }
}
@media screen and (max-width: 480px) {
  .bogc_band_button {
    width: 125px;
    padding: 3px 0;
    font-size: 9px;
  }
}
.bogc_band_button_accept {
  color: #333;
  border: 2px solid #ddd;
  background-color: #ddd;
}
.bogc_band_button_accept:hover {
  color: #fff;
  border-color: ${button_color};
  background-color: ${button_color};
}
.bogc_band_button_custom {
  color: #ddd;
  border: 2px solid #ddd;
}
.bogc_band_button_custom:hover {
  color: #fff;
  border-color: ${button_color};
  background-color: ${button_color};
}
.bogc_band_close {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.bogc_band_close::before, .bogc_band_close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 27px;
  background: #ddd;
}
.bogc_band_close::before {
  transform: translate(-50%,-50%) rotate(45deg);
}
.bogc_band_close::after {
  transform: translate(-50%,-50%) rotate(-45deg);
}
</style>
`);

const band = $(`
<div class="bogc_band bogc_band_fadein">
  <div class="bogc_band_close"></div>
  <div class="bogc_band_inner">
    <div class="bogc_band_notice">
      <p>
        <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#FFC033;" d="M471.801,434.713C423.206,484.554,358.118,512,288.536,512c-13.594,0-26.945-1.07-39.97-3.114 C126.312,489.645,32.533,383.558,32.533,255.997c0-68.08,26.308-132.124,74.091-180.327c38.833-39.172,88.241-64.261,141.941-72.588 c12.376-1.936,24.968-2.965,37.723-3.074c27.798-0.217,55.217,3.967,81.444,12.498c8.652,2.816,15.49,9.681,18.279,18.347 c2.789,8.652,1.232,18.184-4.143,25.482c-19.308,26.254-29.517,57.41-29.517,90.109c0,48.636,22.422,93.197,61.54,122.267 c8.896,6.608,12.863,18.239,9.884,28.949c-1.977,7.095-2.979,14.434-2.979,21.813c0,30.574,16.898,58.29,44.087,72.358 c7.555,3.9,12.877,11.252,14.244,19.674C480.48,419.927,477.745,428.606,471.801,434.713z"></path> <path style="fill:#F9A926;" d="M471.801,434.713C423.206,484.554,358.118,512,288.536,512c-13.594,0-26.945-1.07-39.97-3.114V3.082 c12.376-1.936,24.968-2.965,37.723-3.074c27.798-0.217,55.217,3.967,81.444,12.498c8.652,2.816,15.49,9.681,18.279,18.347 c2.789,8.652,1.232,18.184-4.143,25.482c-19.308,26.254-29.517,57.41-29.517,90.109c0,48.636,22.422,93.197,61.54,122.267 c8.896,6.608,12.863,18.239,9.884,28.949c-1.977,7.095-2.979,14.434-2.979,21.813c0,30.574,16.898,58.29,44.087,72.358 c7.555,3.9,12.877,11.252,14.244,19.674C480.48,419.927,477.745,428.606,471.801,434.713z"></path> <path style="fill:#A6673A;" d="M270.027,177.519c0,31.237-25.401,56.638-56.638,56.638s-56.638-25.401-56.638-56.638 s25.401-56.638,56.638-56.638S270.027,146.282,270.027,177.519z"></path> <path style="fill:#99522E;" d="M270.027,177.519c0,31.237-25.401,56.638-56.638,56.638V120.88 C244.625,120.88,270.027,146.282,270.027,177.519z"></path> <path style="fill:#A6673A;" d="M253.63,315.709c0,35.665-29.03,64.681-64.695,64.681s-64.681-29.016-64.681-64.681 s29.016-64.695,64.681-64.695S253.63,280.044,253.63,315.709z"></path> <path style="fill:#99522E;" d="M253.63,315.709c0,35.665-29.03,64.681-64.695,64.681V251.014 C224.6,251.014,253.63,280.044,253.63,315.709z"></path> <path style="fill:#A6673A;" d="M356.751,362.314c0,27.134-22.084,49.218-49.232,49.218c-27.134,0-49.218-22.084-49.218-49.218 c0-27.148,22.084-49.232,49.218-49.232C334.667,313.082,356.751,335.166,356.751,362.314z"></path> <path style="fill:#99522E;" d="M356.751,362.314c0,27.134-22.084,49.218-49.232,49.218v-98.45 C334.667,313.082,356.751,335.166,356.751,362.314z"></path> </g></svg>
      </p>
      <p>
        ${surface_text[lang].band_text}
      </p>
    </div>
    <div class="bogc_band_buttons">
      <div class="bogc_band_button bogc_band_button_accept">${surface_text[lang].btn_accept}</div>
      <div class="bogc_band_button bogc_band_button_custom">${surface_text[lang].btn_custom}</div>
    </div>
  </div>
</div>
`);

const modal_style = $(`
<style>
.bogc_modal {
  display: none;
  position: fixed;
  z-index: 10001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: ${font_family};
  font-size: 13px;
}
.bogc_modal_backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bogc_modal_wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
}
.bogc_modal_contents {
  color: #666;
}
.bogc_modal_contents h3 {
  margin-top: 0;
  font-size: 24px;
}
.bogc_modal_contents p {
  margin: 0;
}
@media screen and (max-width: 480px) {
  .bogc_modal_note_first {
    display: none;
  }
}
.bogc_modal_contents ul {
  margin-top: 30px;
  list-style-type: none;
  padding-inline-start: 0;
  line-height: 1.5;
}
.bogc_modal_contents li:not(.bogc_modal_question_target) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 42px;
}
.bogc_modal_cookie_name {
  color: #333;
  font-size: 14px;
  font-weight: bold;
}
.bogc_modal_question {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  background-image: url('data:image/png;base64,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');
  background-repeat: no-repeat;
  background-size: 16px 16px;
  cursor: pointer;
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.bogc_modal_question_target {
  display: none;
  margin-bottom: 20px;
}
.bogc_modal_toggle_button {
  position: relative;
  width: 63px;
  height: 33px;
}
.bogc_modal_toggle_input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.bogc_modal_toggle_input.disabled {
  cursor: not-allowed;
}
.bogc_modal_toggle_label {
  width: 63px;
  height: 33px;
  background: #fff;
  border: 2px solid #ddd;
  position: relative;
  display: inline-block;
  border-radius: 32px;
  transition: 0.4s;
  box-sizing: border-box;
}
.bogc_modal_toggle_label.disabled {
  opacity: 0.3;
}
.bogc_modal_toggle_label:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  left: 2px;
  top: 2px;
  z-index: 2;
  background: #ddd;
  transition: 0.4s;
}
.bogc_modal_toggle_input:checked + .bogc_modal_toggle_label {
  border: 2px solid ${button_color};
}
.bogc_modal_toggle_input:checked + .bogc_modal_toggle_label:after {
  left: 32px;
  background: ${button_color};
}
.bogc_modal_buttons {
  text-align: center;
  padding: 10px;
}
.bogc_modal_button {
  display: inline-block;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  width: 180px;
  height: fit-content;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  color: #333;
  border: 2px solid #333;
}
.bogc_modal_button:hover {
  color: #fff;
  border-color: ${button_color};
  background-color: ${button_color};
}
.bogc_modal_footer {
  position: absolute;
  background-color: #333;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: right;
  padding: 4px 10px;
}
.bogc_modal_footer a {
  color: #ddd;
  text-decoration: none;
}
</style>
`);

const modal = $(`
<div id="bogc-modal" class="bogc_modal">
  <div id="bogc-modal-backdrop" class="bogc_modal_backdrop"></div>
  <div class="bogc_modal_wrapper">
    <div class="bogc_modal_contents">
      <h3>${surface_text[lang].mdl_title}</h3>
      <p class="bogc_modal_note_first">
        ${surface_text[lang].mdl_desc1}
      </p>
      <p class="bogc_modal_note_second">
        ${surface_text[lang].mdl_desc2}
      </p>
      <ul>
        <li>
          <div class="bogc_modal_cookie_name">
            ${surface_text[lang].sc_name}
            <span id="bogc-modal-question-strictly" class="bogc_modal_question"></span>
          </div>
          <div class="bogc_modal_toggle_button">
            <input id="bogc-modal-toggle-strictly" class="bogc_modal_toggle_input disabled" type="checkbox" checked disabled>
            <label for="bogc-modal-toggle-strictly" class="bogc_modal_toggle_label disabled"></label>
          </div>
        </li>
        <li id="bogc-modal-question-strictly-target" class="bogc_modal_question_target">
          <div>
            ${surface_text[lang].sc_note}
          </div>
        </li>
        <li>
          <div class="bogc_modal_cookie_name">
            ${surface_text[lang].pc_name}
            <span id="bogc-modal-question-performance" class="bogc_modal_question"></span>
          </div>
          <div class="bogc_modal_toggle_button">
            <input id="bogc-modal-toggle-performance" class="bogc_modal_toggle_input" type="checkbox" checked>
            <label for="bogc-modal-toggle-performance" class="bogc_modal_toggle_label"></label>
          </div>
        </li>
        <li id="bogc-modal-question-performance-target" class="bogc_modal_question_target">
          <div>
            ${surface_text[lang].pc_note}
          </div>
        </li>
        <li>
          <div class="bogc_modal_cookie_name">
            ${surface_text[lang].fc_name}
            <span id="bogc-modal-question-functional" class="bogc_modal_question"></span>
          </div>
          <div class="bogc_modal_toggle_button">
            <input id="bogc-modal-toggle-functional" class="bogc_modal_toggle_input" type="checkbox" checked>
            <label for="bogc-modal-toggle-functional" class="bogc_modal_toggle_label"></label>
          </div>
        </li>
        <li id="bogc-modal-question-functional-target" class="bogc_modal_question_target">
          <div>
            ${surface_text[lang].fc_note}
          </div>
        </li>
        <li>
          <div class="bogc_modal_cookie_name">
            ${surface_text[lang].tc_name}
            <span id="bogc-modal-question-targeting" class="bogc_modal_question"></span>
          </div>
          <div class="bogc_modal_toggle_button">
            <input id="bogc-modal-toggle-targeting" class="bogc_modal_toggle_input" type="checkbox" checked>
            <label for="bogc-modal-toggle-targeting" class="bogc_modal_toggle_label"></label>
          </div>
        </li>
        <li id="bogc-modal-question-targeting-target" class="bogc_modal_question_target">
          <div>
            ${surface_text[lang].tc_note}
          </div>
        </li>
      </ul>
    </div>
    <div class="bogc_modal_buttons">
      <div class="bogc_modal_button">${surface_text[lang].mdl_button}</div>
    </div>
    <div class="bogc_modal_footer">
      <a href="https://github.com/nopejp/bolt-on-gdpr-cookie" target="_blank" rel="noopener">Powered by NOPE Office</a>
    </div>
  </div>
</div>
`);

// --

$('body').append(style).append(band).append(modal_style).append(modal);
if (privacy_policy_url) {
  $('#bogc-privacy-policy').attr('href', privacy_policy_url);
}

// on cancel
$('.bogc_band_close').click(function(){
  $('.bogc_band').addClass('bogc_band_fadeout');
});

// toggle modal
$('.bogc_band_button_custom').click(function(){
  $('#bogc-modal').fadeIn();
});
$('#bogc-modal-backdrop').click(function(){
  $('#bogc-modal').fadeOut();
});

// modal accordion
$('[id^=bogc-modal-question]').click(function(){
  $('#' + $(this).attr('id') + '-target').slideToggle();
});

// on accept all
$('.bogc_band_button_accept').click(function(){
  set_cookie(cookie_name, JSON.stringify({
    strictly: true,
    performance: true,
    functional: true,
    targeting: true,
  }), cookie_max_age);
  $('.bogc_band').addClass('bogc_band_fadeout');
});

// on save settings
$('.bogc_modal_button').click(function(){
  set_cookie(cookie_name, JSON.stringify({
    strictly: true,
    performance: $('#bogc-modal-toggle-performance').prop('checked'),
    functional: $('#bogc-modal-toggle-functional').prop('checked'),
    targeting: $('#bogc-modal-toggle-targeting').prop('checked'),
  }), cookie_max_age);
  $('#bogc-modal').fadeOut();
  $('.bogc_band').addClass('bogc_band_fadeout');
});

}());
