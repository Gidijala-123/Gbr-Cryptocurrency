function setTime() {
         let now = new Date();
         document.querySelector('.time').innerHTML = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
         }
         setInterval(setTime, 5000);
         setTime();
         // -----------------------------------
         const { Component } = React;
         function roundNumber(number) {
         let rounded = +(Math.round(number + 'e+4') + 'e-4');
         let roundedString = rounded + '';
         let [before, after] = roundedString.split('.');
         before = before.replace(/\\B(?=(\d{3})+\b)/g, ',');
         if (after) {
         return before + '.' + after;
         } else {
         return before;
         }
         }
        
         let Bitcoin = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M183 112.9c-7.3-5.5-17.7-7.7-17.7-7.7S174 100 177.7 95c3.6-5.1 5.4-13 5.7-17.1.3-4.1 1-21.3-12.4-31.2C160.6 39 148.7 36 132.8 35V.3h-21.4v34.3H95V.3H73.7v34.3h-42v22.2H44c3.4 0 9.4.4 11.9 3.2 2.6 2.9 3 4.4 3 10v88.4c0 2.1-.4 4.7-2.2 6.4-1.8 1.7-3.6 2.1-7.9 2.1H36l-4.4 25.7h42.1v34.2h21.4v-34.2h16.3v34.2h21.4v-34.7c5.5-.3 10.7-.8 13.7-1.2 6-.8 19.9-2.4 32.8-11.4 12.9-9 15.8-23 16-37.2.4-14.2-5-24-12.3-29.4zM95 58.8s6.8-.6 13.5-.5a68 68 0 0 1 21.4 3c8.8 2.7 14 9.3 14.2 17 .2 7.9-3.2 13-9.2 16.4-6 3.3-14.3 5-22.1 5.4-7.8.3-17.8 0-17.8 0V58.8zM143 161a68 68 0 0 1-24.2 5.8c-9.5.7-23.7.4-23.7.4v-45.8s13.6-.7 24.2 0 19.5 3.4 23.5 5.4c4 2 11 6.4 11 16.9 0 10.4-6 14.6-10.8 17.3z" })));
         };
         let Etherium = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M112.6 157V87l-68.4 30zm0-74.8V-.1L46.4 111.2zM117-.1v82.3l67 29.4zm0 87V157l68.4-40zm-4.4 140.5v-56.3l-68-39.8zm4.4 0l67.9-96-68 39.7z" })));
         };
         let Ripple = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M196.2 139.5a49 49 0 0 0-24-6h.1A20 20 0 0 1 152 114a19.9 19.9 0 0 1 19.5-19.9 49 49 0 0 0 24.2-6.5 45.9 45.9 0 0 0 16.8-64 48.9 48.9 0 0 0-65.9-16.2 45.9 45.9 0 0 0-16.7 64 19.1 19.1 0 0 1-7 26.6 20.4 20.4 0 0 1-27.2-6.4 48.8 48.8 0 0 0-83.4.5 46 46 0 0 0 18.2 63.5A48.8 48.8 0 0 0 96 138.1l.2-.4c5.6-9 17.6-12.2 27-7 9.7 5.3 13 17.1 7.7 26.5a46 46 0 0 0 18.2 63.5 48.8 48.8 0 0 0 65.4-17.6 46 46 0 0 0-18.2-63.6z" })));
         };
         let Litecoin = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M94.7 184.1l12.8-60.8L172.1 79l7.5-36.1-64.5 44.4L133.4 0H83.8L57 127.2 30 145.9l-6.3 34.9 26-17.8-13.4 63.7h158.9l8.8-42.6z" })));
         };
         let Neo = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M207.288 35.521L132.161 0 21.651 39.9l75.127 35.521 110.51-39.9zm-77.066 42.211v73.601l78.278 36.982V49.471l-78.278 28.261zM94.839 89.441V227L18.5 190.991V53.348" })));
         };
         let Dash = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M92.7 97.7H10.2l-9.5 31H83z" }), /*#__PURE__*/React.createElement("path", { d: "M223.9 57.9a23.5 23.5 0 0 0-21-12.1H49L38.3 79.6h138.1l-20.8 67.6H16.5L6.1 181h148c14.5 0 18.3-2.5 28.7-8.6s18.4-16.6 22.8-29.3a1584 1584 0 0 0 18.3-60c3.3-11.8 4.5-16.4 0-25.2z" })));
         };
         let Eos = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("path", { d: "M197.4 177.2l-27.6-106a5.5 5.5 0 0 0-1-2L118 2.3a5.5 5.5 0 0 0-8.8 0l-51.5 67a5.5 5.5 0 0 0-1 2l-27 106a5.5 5.5 0 0 0 2.7 6.2l78.5 43.4a5.6 5.6 0 0 0 5.4 0l78.5-43.4a5.5 5.5 0 0 0 2.7-6.2zm-19.7-31.5l-21-33.3 7-20.6 14 53.9zM119 22l39.2 51.6-9.1 26.8L119 53V22zm-5.5 42.9l31 49-20.2 59.2h-21.8l-20.3-58.8 31.3-49.4zM108 21.8V53l-30.4 48-9.4-27.4L108 21.8zm-45.2 70l7.2 21-21 33.4 13.8-54.3zm11.8 34.5L90.8 173H45l29.6-46.8zM56.4 184h38.2l9 26-47.2-26zm57 20.8l-7.1-20.8h14.3l-7.1 20.8zm10 5.3l8.9-26.1h38.3l-47.3 26.1zm12.6-37.1l16-47.2 30 47.2h-46z" })));
         };
         let Iota = () => {
         return /*#__PURE__*/(
         React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 226 226" }, /*#__PURE__*/React.createElement("circle", { cx: "131.3", cy: "135.8", r: "6" }), /*#__PURE__*/React.createElement("circle", { cx: "144.7", cy: "123.3", r: "6.5" }), /*#__PURE__*/React.createElement("circle", { cx: "156.2", cy: "105.6", r: "7.4" }), /*#__PURE__*/React.createElement("circle", { cx: "163.6", cy: "81.5", r: "10.7" }), /*#__PURE__*/React.createElement("circle", { cx: "167.7", cy: "52.3", r: "11.5" }), /*#__PURE__*/React.createElement("circle", { cx: "164.5", cy: "18.4", r: "14.3" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 145.8 148.3)", cx: "145.8", cy: "148.3", rx: "5.2", ry: "5.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 159.5 140.5)", cx: "159.5", cy: "140.5", rx: "5.6", ry: "5.6" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 172.5 128)", cx: "172.6", cy: "128", rx: "6.4", ry: "6.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 183.5 109.5)", cx: "183.5", cy: "109.5", rx: "9.1", ry: "9.1" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 192.8 86)", cx: "192.8", cy: "85.9", rx: "9.9", ry: "9.9" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-76.6 196.8 57)", cx: "196.8", cy: "57", rx: "12.2", ry: "12.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 158.1 161.1)", cx: "158.1", cy: "161.1", rx: "4.4", ry: "4.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 170.8 157.2)", cx: "170.8", cy: "157.2", rx: "4.7", ry: "4.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 183.8 149.2)", cx: "183.8", cy: "149.2", rx: "5.4", ry: "5.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 196.2 135.8)", cx: "196.2", cy: "135.8", rx: "7.7", ry: "7.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 208 118)", cx: "208", cy: "118", rx: "8.4", ry: "8.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-64.5 216.5 94.8)", cx: "216.5", cy: "94.8", rx: "10.3", ry: "10.3" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 132.6 92.3)", cx: "132.6", cy: "92.3", rx: "6", ry: "6" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 115 87)", cx: "115", cy: "87", rx: "6.5", ry: "6.5" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 94 85.9)", cx: "93.9", cy: "85.9", rx: "7.4", ry: "7.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 69.4 91.5)", cx: "69.4", cy: "91.5", rx: "10.7", ry: "10.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 42 102.5)", cx: "42", cy: "102.5", rx: "11.5", ry: "11.5" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-30 14.3 122.3)", cx: "14.3", cy: "122.3", rx: "14.3", ry: "14.3" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 136.2 73.5)", cx: "136.2", cy: "73.5", rx: "5.2", ry: "5.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 122.6 65.6)", cx: "122.6", cy: "65.6", rx: "5.6", ry: "5.6" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 105.2 60.5)", cx: "105.2", cy: "60.5", rx: "6.4", ry: "6.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 83.7 60.3)", cx: "83.7", cy: "60.3", rx: "9.1", ry: "9.1" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 58.7 64)", cx: "58.7", cy: "64", rx: "9.9", ry: "9.9" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-16.6 31.6 75)", cx: "31.6", cy: "75", rx: "12.2", ry: "12.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.4 141.2 56.4)", cx: "141.1", cy: "56.4", rx: "4.4", ry: "4.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.4 131.4 47.4)", cx: "131.3", cy: "47.4", rx: "4.7", ry: "4.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.5 118 40.2)", cx: "117.9", cy: "40.2", rx: "5.4", ry: "5.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.5 100.2 36.2)", cx: "100.1", cy: "36.1", rx: "7.7", ry: "7.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.5 78.8 34.8)", cx: "78.8", cy: "34.8", rx: "8.4", ry: "8.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-4.5 54.5 39.1)", cx: "54.5", cy: "39.1", rx: "10.3", ry: "10.3" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 94.5 114.3)", cx: "94.5", cy: "114.3", rx: "6", ry: "6" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 98.6 132.2)", cx: "98.6", cy: "132.2", rx: "6.5", ry: "6.5" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 108.3 151)", cx: "108.3", cy: "151", rx: "7.4", ry: "7.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 125.4 169.5)", cx: "125.4", cy: "169.5", rx: "10.7", ry: "10.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 148.6 187.7)", cx: "148.6", cy: "187.7", rx: "11.5", ry: "11.5" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-60 179.6 201.8)", cx: "179.6", cy: "201.8", rx: "14.3", ry: "14.3" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 76.5 120.6)", cx: "76.5", cy: "120.6", rx: "5.2", ry: "5.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 76.3 136.4)", cx: "76.3", cy: "136.4", rx: "5.6", ry: "5.6" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 80.6 154)", cx: "80.6", cy: "154", rx: "6.4", ry: "6.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 91.2 172.8)", cx: "91.2", cy: "172.7", rx: "9.1", ry: "9.1" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 107 192.5)", cx: "107", cy: "192.5", rx: "9.9", ry: "9.9" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-46.6 130 210.5)", cx: "130", cy: "210.5", rx: "12.2", ry: "12.2" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 59.2 124.9)", cx: "59.2", cy: "124.9", rx: "4.4", ry: "4.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 56.3 137.9)", cx: "56.3", cy: "137.9", rx: "4.7", ry: "4.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 56.7 153.1)", cx: "56.7", cy: "153.2", rx: "5.4", ry: "5.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 62 170.5)", cx: "62.1", cy: "170.5", rx: "7.7", ry: "7.7" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 71.6 189.7)", cx: "71.6", cy: "189.7", rx: "8.4", ry: "8.4" }), /*#__PURE__*/React.createElement("ellipse", { transform: "rotate(-34.5 87.4 208.6)", cx: "87.4", cy: "208.6", rx: "10.3", ry: "10.3" })));
         };
         let Coin = props => {
         const CoinComponent = props.coin.component;
         return /*#__PURE__*/(
         React.createElement("div", { className: "item" }, /*#__PURE__*/
         React.createElement("div", { className: "badge" }, /*#__PURE__*/
         React.createElement("div", { className: 'crypto' + (props.coin.alias === 'BTC' ? ' btc' : '') }, /*#__PURE__*/
         React.createElement(CoinComponent, null))), /*#__PURE__*/
         React.createElement("div", { className: "info" }, /*#__PURE__*/
         React.createElement("div", { className: "name" }, props.coin.name), /*#__PURE__*/
         React.createElement("div", { className: "alias" }, props.coin.alias)), /*#__PURE__*/
         React.createElement("div", { className: "money" }, /*#__PURE__*/
         React.createElement("div", { className: "current-price" }, roundNumber(props.price), " $"), /*#__PURE__*/
         React.createElement("div", { className: 'difference' + (props.change < 0 ? ' red' : ' green') }, /*#__PURE__*/
         React.createElement("span", null, Math.abs(props.change), "%"),
         props.change < 0 ? /*#__PURE__*/
         React.createElement("i", { className: "fas fa-caret-down" }) : /*#__PURE__*/
         React.createElement("i", { className: "fas fa-caret-up" })))));
         };
         class ChartView extends Component {
         render() {
         return /*#__PURE__*/React.createElement("div", { className: "chart" });
         }}
         let socket;
         let exchange = 'Bitfinex';
         let watchList = [{
         name: 'Bitcoin',
         alias: 'BTC',
         component: Bitcoin },
         {
         name: 'Etherium',
         alias: 'ETH',
         component: Etherium },
         {
         name: 'Ripple',
         alias: 'XRP',
         component: Ripple },
         {
         name: 'Litecoin',
         alias: 'LTC',
         component: Litecoin },
         {
         name: 'Neo',
         alias: 'NEO',
         component: Neo },
         {
         name: 'Dash',
         alias: 'DASH',
         component: Dash },
         {
         name: 'Eos',
         alias: 'EOS',
         component: Eos },
         {
         name: 'Iota',
         alias: 'IOT',
         component: Iota }];
         class App extends Component {
         constructor() {
         super();
         this.state = {
         watchList: watchList,
         data: {},
         socket: 'Off' };
         }
         componentDidMount() {
         socket = io.connect('https://streamer.cryptocompare.com/');
         let subs = this.state.watchList.map(coin => `2~${exchange}~${coin.alias}~USD`);
         socket.emit('SubAdd', { subs });
         socket.on('m', this.onCoinValueChange.bind(this));
         socket.on('connect', () => this.setState({ socket: 'On' }));
         socket.on('disconnect', () => this.setState({ socket: 'Off' }));
         }
         onCoinValueChange(message) {
         const data = message.split("~");
         let responseFlag = data[4]; // 1 up, 2 down, 4 unchanged
         if (!['1', '2', '4'].includes(responseFlag)) return;
         let coin = data[2],
         price = data[5],
         volume24 = data[10],
         open24 = data[12];
         let coinData = this.state.data[coin];
         let details;
         if (!this.state.data[coin]) {
         details = Object.assign({}, this.state.data[coin], {
         price: price,
         open24: open24,
         change: ((price - open24) / open24 * 100).toFixed(2) });
         } else if (['1', '2'].includes(responseFlag)) {
         details = Object.assign({}, coinData, {
         price: price,
         change: ((price - coinData.open24) / coinData.open24 * 100).toFixed(2) });
         }
         this.setState({
         data: Object.assign({}, this.state.data, {
         [coin]: Object.assign({}, this.state.data[coin], details) }) });
         }
         render() {
         return /*#__PURE__*/(
         React.createElement("div", { className: "list" },
         this.state.watchList.map((coin, i) => /*#__PURE__*/
         React.createElement(Coin, {
         key: coin.alias,
         coin: coin,
         price: this.state.data[coin.alias] ? this.state.data[coin.alias].price : '0',
         change: this.state.data[coin.alias] ? this.state.data[coin.alias].change : '0',
         onClick: this.changeView }))));
         }}
         ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));