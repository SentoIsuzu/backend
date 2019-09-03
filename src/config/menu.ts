



const menuList:any = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '商品中心',
        key: '/product',
        children: [
            {
                title: '商品管理',
                key: '/product/list',
            },
            {
                title: '商品分类',
                key: '/product/product-classification',
            },
            {
                title: '商品明细',
                key: '/product/mould',
            },
            {
                title: '营销助手',
                key: '/ui/notification',
            },
        ]
    },
    {
        title: '商户中心',
        key: '/store',
        children: [
            {
                title: '商家管理',
                key: '/store/store-list',
            },
            {
                title: '认证审核',
                key: '/store/store-authentication',
            },
            {
                title: '商品明细',
                key: '/product/mould',
            },
            {
                title: '营销助手',
                key: '/ui/notification',
            },
        ]
    },
];
export  default menuList;