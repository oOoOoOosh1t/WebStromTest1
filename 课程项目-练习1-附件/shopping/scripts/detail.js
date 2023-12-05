window.onload = function (){
    {
        function getQueryVariable(variable) {
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i = 0; i < vars.length; i++) {
                let pair = vars[i].split("=");
                console.log(pair);
                if (pair[0] === variable) { return pair[1]; }
            }
            return false;
        }
        let id = getQueryVariable("id");
        fetch('json/item.json')
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                for (let index = 0; index < json.length; index++) {
                    const temp = json[index];
                    // if(temp.id==id){
                    //     //输入内容
                    // }
                }
            })
            .catch(function(e){
                console.log("读取json数据失败");
            })
    }
}