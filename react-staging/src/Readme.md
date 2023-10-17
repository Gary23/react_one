path写多级目录  比如/abc/about   /abc/home
切换路由后，刷新后样式会丢失，证明bootstrap没有加载成功

路由路径是多级的话，刷新后会去找第一级的地址(/abc)去找资源，所以bootstrap会找不到
./bootstrap.css 要改为 /bootstrap.css 或者 %PUBLIC_URL%/bootstrap.css