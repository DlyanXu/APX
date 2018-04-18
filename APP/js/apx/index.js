$(function () {

    // 1.加载头部目录
   $.ajax({
       type:'GET',
       url:"../menu.json",
       data:{},
       dataType:'json',
       success:function (res) {
           var html = '' ;
           for (var i = 0; i < res.data.length; i++){
               var temphtml =
                   `<li class="dropdown">
                        <a href="${res.data[i].html}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">${res.data[i].name_cn}</a>
                    </li>`;
               html += temphtml;
           };
           $("#menuitems").append(html);

       }
   });

   // 2.

});