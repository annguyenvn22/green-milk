(function () {
    'use strict';

    angular
        .module('core')
        .controller('ReasonController', ReasonController);

    ReasonController.$inject = [];

    function ReasonController() {
        var vm = this;

        vm.header  = 'Tại Sao Chọn Green Milk';
        vm.reasons = [
            {
                id     : 0,
                img    : 'modules/core/client/img/img01.png',
                title  : 'Sản Phẩm Tươi',
                content: 'Green Milk biết rằng để giữ nguyên vị ngon và dinh dưỡng trong sữa thì sau khi chế biến, sữa phải được sử dụng hết trong ngày và không thêm các chất bảo quản hay bất kì phụ gia hương liệu nào khác. Vì vậy Green Milk quyết tâm xây dựng quy trình để sữa luôn được nấu vào mỗi sáng và bán trực tiếp cho khách hàng thân yêu trong ngày.'
            },
            {
                id     : 1,
                img    : 'modules/core/client/img/img01.png',
                title  : 'Sản Phẩm Sạch',
                content: 'Quy trình chế biến sữa luôn đảm bảo thực hiện nghiêm ngặt tiêu chuẩn vệ sinh an toàn thực phẩm, với phương châm của đội ngũ chế biến “ chúng ta là người đầu tiên sử dụng sản phẩm trước khi sữa được đưa đến tay khách hàng”'
            },
            {
                id     : 2,
                img    : 'modules/core/client/img/img01.png',
                title  : 'Nhân Viên Dễ Thương',
                content: 'Green Milk hiểu rằng con người là tải sản quan trọng nhất vì vậy chúng tôi quyết tâm xây dựng cộng đồng các bạn trẻ đam mê và nhiệt huyết, các bạn đến đây không chỉ để đi làm mà Green Milk còn là mội trường cho các bạn rèn luyện, chia sẻ và kết nối nhiều hơn. Để rồi các bạn sẽ tìm thấy đươc sứ mệnh của cuộc đời mình và dũng cảm vượt qua nỗi sợ để sống một cuộc sống có ý nghĩa hơn.'
            }
        ];

    }
})();