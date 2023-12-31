const progress_ball = {
    dom: {
        elements: [{
            css: document.createElement('STYLE'),
        }],
        initiate: function(){
            const _p = progress_ball,
                  _m = _p.mods.methods,
                  _s = _p.init?.conf,
                  s_ = _s.static,
                  _c = s_.classs,
                  _c_show = _c.show,
                  _c_wave = _c.wave,
                  _c_wrapper = _c.wrapper,
                  _c_container = _c.container,
                  _e = _s.element,
                  _e_percent = _e.percent.class,
                  _e_middle = _e.middle.class,
                  s_size = s_.size,
                  s_scheme = s_.scheme,
                  color_theme = s_scheme.theme,
                  color_light = s_scheme.light,
                  color_heavy = s_scheme.heavy,
                  css = _p.dom.elements[0].css;
            css.innerText = `html,body{scroll-behavior:smooth;}.${_c_wrapper}{position:fixed;z-index:9999;right:20px;bottom:50px;opacity:0;transform:translate(0px, 0px);-webkit-transform:translate(0px, 0px);transition-property:transform,opacity;transition:.5s ease;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;}.${_c_wrapper} .${_c_container}{color:${color_heavy};width:${s_size}px;height:${s_size}px;text-align:center;font-family:"Microsoft YaHei","微软雅黑","Microsoft JhengHei","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,Helvetica,Lucida Grande,Tahoma,sans-serif;position:relative}.${_c_wrapper} .${_c_container} div:hover{background:${color_theme}}.${_c_wrapper} .${_c_container} div{cursor:pointer;font-size:7px;width:71%;height:72%;background:currentColor;border-radius:50%;margin:0 auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:transform .35s ease;display: flex;align-items: center;justify-content: center}.${_c_wrapper} .${_c_container} div,.${_c_wrapper} .${_c_container} .${_e_percent} i{will-change:transform;}.${_c_wrapper} .${_c_container} div em,.${_c_wrapper} .${_c_container} div b,.${_c_wrapper} .${_c_container} div i{color:${color_light};font-family:'icomoon';font-style:normal;margin-top:-2px;position:relative;display:inline-block;user-select:none;-webkit-user-select:none;}.${_c_wrapper} .${_c_container} div [data-icon]:not([data-icon=""]){color:transparent;}.${_c_wrapper} .${_c_container} .${_e_percent}{color:currentColor;width:inherit;height:inherit;background:currentColor;border:2px solid currentColor;overflow:hidden}.${_c_wrapper} .${_c_container} .${_e_percent} b::before{content:attr(data-percent)'%';}.${_c_wrapper} .${_c_container} .${_e_percent} b{line-height:${s_size - 2}px;position:relative;z-index:1;margin:auto;font-size:inherit;}.${_c_wrapper} .${_c_container} .${_e_percent} i{width:100%;height:auto;display:block;transform: translateY(100%);-webkit-transform: translateY(100%);position:inherit;bottom:0;left:0;transition:transform .15s linear;/*background:currentColor;*/}.${_c_wrapper} .${_c_container} .${_e_percent}:hover{background:currentColor!important}.${_c_wrapper} .${_c_container} .${_e_middle}.disabled{cursor:not-allowed;pointer-events:none}.${_c_wrapper} .${_c_container} div em:before,.${_c_wrapper} .${_c_container} .${_e_middle} i:before{content: attr(data-icon);font-size:14px;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);margin-top:-1px;color:initial;}.${_c.switcher} .${_c_wrapper} .${_c_container} .${_e_middle} i:before{content:'${_e.middle.icons.actived}'}.${_c_wrapper} .${_c_container} .${_e_percent} span{display:block;width:100%;min-height:${s_size}px;position:relative;/*overflow:hidden;*/}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:before,.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:after{animation-name:rotate;-webkit-animation-name:rotate;}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:before{top:6px;border-radius:36%;animation-duration:10s;-webkit-animation-duration:10s;}.${_c_wrapper} .${_c_container} .${_e_percent} span.${_c_wave}:after{top:3px;opacity:.5;border-radius:44%;animation-duration:7s;-webkit-animation-duration:7s;}.${_c_wrapper} .${_c_container} .${_e_percent} span:before,.${_c_wrapper} .${_c_container} .${_e_percent} span:after{content:"";width:200%;height:200%;position:absolute;top:0%;left:0%;left:-50%;background:${color_theme};animation-iteration-count:infinite;animation-timing-function:linear}@keyframes rotate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.${_c_wrapper}.${_c_show}{opacity:1;transform:translate(0px,-25px);-webkit-transform:translate(0px,-25px);}.${_c_wrapper}.${_c_show} .${_e.top.class}{transform:translate(-50%,-225%);-webkit-transform:translate(-50%,-225%);}.${_c_wrapper}.${_c_show} .${_e_middle}{transform:translate(-186%,-186%);-webkit-transform:translate(-186%,-186%);}.${_c_wrapper}.${_c_show} .${_e.bottom.class}{transform:translate(-225%,-50%);-webkit-transform:translate(-225%,-50%);}`;
            document.head.appendChild(css);
            if(!window.scrollTo){
                window.scrollTo = function (x, y) {
                    window.pageXOffset = x;
                    window.pageYOffset = y;
                }
            }
            let w_ = document.createElement('DIV'),
                b_ = document.createElement('DIV');
            w_.className = _c.wrapper;
            b_.className = _c.container;
                b_.appendChild(_m.dom_binder.apply(_e, [_e.top.class, `<em data-icon="${_e.top.icon}">${_e.top.text}</em>`, ()=>{
                    _m.scroll_click.call(_p, _e.top, ()=>window.scrollTo(0, 0));
                }]));
                b_.appendChild(_m.dom_binder.apply(_e, [_e.middle.class, `<i data-icon="${_e.middle.icons.default}">${_e.middle.text}</i>`, ()=>{
                    _m.scroll_click.call(_p, _e.middle, ()=>_m.switch_theme.call(_s));
                }]));
                b_.appendChild(_m.dom_binder.apply(_e, [_e.bottom.class, `<em data-icon="${_e.bottom.icon}">${_e.bottom.text}</em>`, ()=>{
                    _m.scroll_click.call(_p, _e.bottom, ()=>window.scrollTo(0, 99999));
                }]));
                b_.appendChild(_m.dom_binder.apply(_e, [_e.percent.class, `<b data-percent="${_e.percent.text}"></b><i class="wave"><span></span></i>`]));
            w_.appendChild(b_);
            _e.wrapper = w_;
        },
    },
    mods: {
        methods: {
            dom_binder: function(el_cls, el_child, el_event = false){
                const el = document.createElement('DIV');
                el.classList.add(el_cls);
                el.innerHTML += el_child;
                this[el_cls] = el; //this[0] = el;
                if(el_event && typeof(el_event)==='function') el_event();
                return el;
            },
            scroll_click: function(t, f){
                if(!t) return;
                try {
                    if(!f || typeof(f)!=='function') throw new Error('scroll callback invalid');
                    let debounce_click = this.mods.methods.closure_debouncer(f, this.init.conf.static.smooth.click);
                    t.onclick = ()=>debounce_click();
                } catch (error) {
                    console.log(error)
                }
            },
            switch_theme: function(){
                const sw_list = this.element.sw_target.classList,
                      switcher = this.static.classs.switcher;
                sw_list.contains(switcher) ? sw_list.remove(switcher) : sw_list.add(switcher);
                console.log('theme switch..', sw_list)
            },
            closure_debouncer: (callback=false, delay=200)=>{
                var timer = null;
                return function(){
                    timer ? clearTimeout(timer) : timer;
                    timer = setTimeout(function(){
                        callback.apply(this, arguments);
                    },delay)
                }
            },
            closure_throttler: (callback=false, delay=200)=>{
                let closure_variable = true;  //default running
                return function(){
                    if(!closure_variable) return;  //now running..
                    closure_variable = false;  //stop running
                    setTimeout(()=>{
                        callback.apply(this, arguments);
                        closure_variable = true;  //reset running
                    }, delay);
                };
            },
        },
        behavior: {
            scroll_fn: function(event){
                let e = event || window.event,
                    t = e.target || e.srcElement;
                if(t!==document) return; // document scroll only
                try {
                    var scrollTop = parseInt(document.documentElement.scrollTop) || document.body.scrollTop,
                        windowHeight = window.innerHeight,
                        documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
                        pagePercent = Math.ceil((scrollTop / (documentHeight-windowHeight)) * 100); //Math.round
                    // console.log(scrollTop, documentHeight);
                    const _e = this.element,
                        _c = this.static.classs,
                        waves = _c.wave,
                        shows = _c.show,
                        childs = _e.percent.children,
                        child = childs[1].firstChild;
                    if(!childs) throw new Error('missing childs!');
                    childs[0].dataset.percent = pagePercent;
                    childs[1].style.transform = `translateY(${100 - pagePercent}%)`;
                    pagePercent>0 ? _e.wrapper.classList.add(shows) : _e.wrapper.classList.remove(shows);
                    pagePercent<=0 || pagePercent>=100 ? child.classList.remove(waves) : child.classList.add(waves);
                } catch (error) {
                    console.log(error);
                }
            },
            scroll_handler: function(delay=200){
                const _m = this.mods;
                return _m.methods.closure_throttler((e)=>{
                    _m.behavior.scroll_fn.call(this.init?.conf, e);
                }, delay);
            },
        }
    },
    __proto__: {
        init: function(user_conf = {}){
            try {
                const PRO = progress_ball,
                      INT = PRO.init;
                // rewrite user-conf.
                let that = this;
                if(that.__proto__ !== INT.prototype){
                    that = INT.prototype;
                    // throw new Error('"new" generator progress init required.');
                    console.warn('keyword "new" is recommended for initiate, current pointed:', this);
                }
                Object.defineProperty(that, '_conf', {
                    value: that._rewriter.call(that, user_conf),
                    // enumerable: true,
                });
                conf = (INT.conf = that._conf);
                // init dom..
                PRO.dom.initiate(); // PRO.dom.elements.push(conf.element);
                // load dom..
                document.body.appendChild(conf.element.wrapper);
                // bind/exec dom event..
                window.addEventListener('scroll', PRO.mods.behavior.scroll_handler.call(PRO, conf.static.smooth.scroll), true);
                // init done.
                console.log('progress initiated.', PRO);
            } catch (error) {
                console.log(error)
            }
        },
    }
};

Object.defineProperties(progress_ball.init.prototype, {
    _presets: {
        value: {
            static: {
                size: 32,
                smooth: {
                    scroll: 200,
                    click: 200,
                },
                scheme: {
                    theme: '#eb6844',
                    light: 'whitesmoke',
                    heavy: '#4a4a4a',
                },
                classs: {
                    wrapper: 'progress_widget',
                    container: 'progress_ball',
                    switcher: 'progress_switcher',
                    show: 'pull_up',
                    wave: 'wave_up',
                },
            },
            element: {
                sw_target: document.body,
                wrapper: null,
                top: {
                    class: 'top',
                    text: '👆',
                    icon: '',
                },
                middle: {
                    class: 'middle',
                    text: '',
                    icons: {
                        default: '☀️',
                        actived: '🌙',
                    }
                },
                bottom: {
                    class: 'bottom',
                    text: '👇',
                    icon: '',
                },
                percent: {
                    class: 'percent',
                    text: '0'
                },
            },
        },
        writable: false,
        enumerable: false,
        configurable: false,
    },
    _rewriter: {
        // notice: unable to set falsy value(0) in user-conf while initializing
        value: function(opts={}, _s=this._presets) {
            if(_s &&typeof _s === "object"){
                for(const [key, val] of Object.entries(_s)){
                    // back-write (mark non-existent property)
                    opts[key] ||= val;
                    // recursion-loop
                    this._rewriter.apply(this, [opts[key], val]);
                }
            }
            return opts;
        },
        configurable: false,
    },
});
