
let fileMap = {};
let require = (pathArr, callback) => {
		pathArr.forEach((value) => {
			let path = value;
			if (!fileMap[path]) {
				let head = document.getElementsByTagName('head')[0];
				let node = document.createElement('script');
				node.type = 'text/javascript';
				node.async = 'true';
				//node.src = me.config.modulesUrl + 'modules/' + value + '/' + value + '.js';
				if(window.location.host.indexOf('www.mejinrong.com') > -1){
					node.src = 'http://static.mejinrong.com/MeAssest/MeJS/' + 'modules/' + value + '/' + value + '.js';
				}else{
					node.src = 'http://10.10.21.70:8097/MeAssest/MeJS/' + 'modules/' + value + '/' + value + '.js';
				}
				/*if(value.indexOf('config') != -1){
					node.src = value + '.js';
				}else{
					//node.src = 'http://192.163.3.188/YueJS1.0/' + path + '.js';
				}*/
				node.onload = () => {
					fileMap[path] = true;
					head.removeChild(node);
					checkAllFiles();
				};
				head.appendChild(node);
			}else{
				callback();
			}
	});

	function checkAllFiles(){
		let allLoaded = true;
		pathArr.forEach((value) => {
			if (!fileMap[value]) {
				allLoaded = false;
				//break;
				return;
			}
		});

		allLoaded && callback();
	}
};

export default require;