/*热搜*/
import $ from "zepto-ajax";

var hotdata = "";
(function(){
    $.ajax({
        url:"/api/data/hot_data",
        type:"get",
        async:false,
        dataType:"json",
        success:function(data1){
           
            hotdata = data1;
        },
        error:function(data1){
            //console.log("error"+data1);
        }
    })
})()

export const hot_data=hotdata;
console.log(hot_data);
console.log(typeof hot_data);

/*天气*/
export const weather={
    "temperature": 28,
    "code": "CLEAR_DAY",
    "description": "晴天",
    "image_hash": "9b9c8e482821be2080edcffbb3a8d376png"
}

/*地址*/

export const address={
    "name": "佛山南海",
    "address": "广东轻工职业技术学院",
    "city": "佛山市",
    "city_id": 3,
    "latitude": 39.908859,
    "longitude": 116.397392,
    "geohash": "baixiao"
}


var shuju="";
(function(){
    $.ajax({
      url: "/api/data/banner",
    	//url: "http://m.c3w.cc/api/data/banner",
        type: "get",
        async: false,
        // contentType: "application/json;charset=UTF8",
         dataType: "json",
        success: function(data){
            //console.log(data);
            // return data
            //console.log(typeof data);
            shuju=data;
        },
        error: function(data){
            //console.log("error"+data);
        }
    })
})()

// console.log(shuju);

export const bannerData=[shuju];
//console.log(typeof shuju);
//console.log([shuju]);

/*主内容*/
/*https://restapi.ele.me/shopping/restaurants?latitude=39.90323&longitude=116.39772&offset=20&limit=0&extras[]=activities&terminal=h5*/
export const body=[
[
   
  
    {
        "activities": [
            {
                "attribute": "17.0",
                "description": "新用户下单立减17.0元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 39840831,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减",
                "tips": "新用户下单立减17.0元",
                "type": 103
            },
            {
                "attribute": "{\"65\": {\"1\": 36.0, \"0\": 0}, \"100\": {\"1\": 60.0, \"0\": 0}, \"30\": {\"1\": 21.0, \"0\": 0}, \"15\": {\"1\": 14.0, \"0\": 0}}",
                "description": "满15减14，满30减21，满65减36，满100减60",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 75310249,
                "is_exclusive_with_food_activity": true,
                "name": "北京焦耳满减",
                "tips": "满15减14，满30减21，满65减36，满100减60",
                "type": 102
            },
            {
                "description": "19.9特价菜",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 81881473,
                "name": "19.9特价菜",
                "tips": "19.9特价菜"
            },
            {
                "description": "精品4折特价菜",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 73242682,
                "name": "精品4折特价菜",
                "tips": "精品4折特价菜"
            },
            {
                "description": "5折特价菜",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 49158393,
                "name": "5折特价菜",
                "tips": "5折特价菜"
            },
            {
                "description": "7折特价菜",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 49144601,
                "name": "7折特价菜",
                "tips": "7折特价菜"
            },
            {
                "description": "9.9超级特惠",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 48518825,
                "name": "9.9超级特惠",
                "tips": "9.9超级特惠"
            },
            {
                "description": "5折特惠",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 48511753,
                "name": "5折特惠",
                "tips": "5折特惠"
            }
        ],
        "address": "北京市朝阳区阜通东大街6号院1号楼1层101",
        "authentic_id": 4331567383118147,
        "delivery_mode": {
            "color": "2395FF",
            "gradient": {
                "rgb_from": "00AAFF",
                "rgb_to": "0085FF"
            },
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
        },
        "description": "欢迎光临",
        "distance": 2363,
        "favored": false,
        "float_delivery_fee": 6,
        "float_minimum_order_amount": 20,
        "id": 703947,
        "image_path": "52f284720c92e16efe11ad8eca539de5jpeg",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 39.990921,
        "longitude": 116.48167747,
        "max_applied_quantity_per_order": -1,
        "name": "焦耳川式快餐（方恒店）",
        "next_business_time": "16:00",
        "only_use_poi": false,
        "opening_hours": [
            "10:00/14:00",
            "16:00/20:00"
        ],
        "order_lead_time": 38,
        "phone": "15901248552",
        "piecewise_agent_fee": {
            "description": "配送费¥6",
            "extra_fee": 1,
            "is_extra": true,
            "rules": [
                {
                    "fee": 6,
                    "price": 20
                }
            ],
            "tips": "配送费¥6"
        },
        "promotion_info": "想吃辣，订焦耳。焦耳，地道川式快餐。直营门店超过100家，服务顾客人次超过500万。既辣又好吃，当然更受欢迎。焦耳，地道川式快餐。",
        "rating": 4.6,
        "rating_count": 0,
        "recent_order_num": 3043,
        "recommend": {
            "is_ad": false,
            "reason": ""
        },
        "regular_customer_count": 0,
        "status": 1,
        "supports": [
            {
                "description": "已加入“外卖保”计划，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "外卖保"
            },
            {
                "description": "该商家支持开发票，开票订单金额100.0元起，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票"
            }
        ],
        "type": 0
    },
    {
        "activities": [
            {
                "attribute": "17.0",
                "description": "新用户下单立减17.0元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 39840734,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减",
                "tips": "新用户下单立减17.0元",
                "type": 103
            },
            {
                "attribute": "{\"40\": {\"1\": 20.0, \"0\": 0}, \"25\": {\"1\": 10.0, \"0\": 0}, \"80\": {\"1\": 40.0, \"0\": 0}}",
                "description": "满25减10，满40减20，满80减40",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 87732561,
                "is_exclusive_with_food_activity": true,
                "name": "黄太吉满减",
                "tips": "满25减10，满40减20，满80减40",
                "type": 102
            },
            {
                "description": "黄太吉4折优惠套餐",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 75376281,
                "name": "黄太吉4折优惠套餐",
                "tips": "黄太吉4折优惠套餐"
            }
        ],
        "address": "北京市朝阳区广顺南大街16号院1号楼一层018100B",
        "authentic_id": 1391517374208726,
        "delivery_mode": {
            "color": "2395FF",
            "gradient": {
                "rgb_from": "00AAFF",
                "rgb_to": "0085FF"
            },
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
        },
        "description": "新店开业，欢迎品尝",
        "distance": 2170,
        "favored": false,
        "float_delivery_fee": 6,
        "float_minimum_order_amount": 20,
        "id": 350626,
        "image_path": "2b64dfec8881953f044a35d5c1bdd443png",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 39.986788,
        "longitude": 116.480395,
        "max_applied_quantity_per_order": -1,
        "name": "黄太吉666",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
            "09:00/21:30"
        ],
        "order_lead_time": 31,
        "phone": "15110156487 010-53603790",
        "piecewise_agent_fee": {
            "description": "配送费¥6",
            "extra_fee": 1,
            "is_extra": true,
            "rules": [
                {
                    "fee": 6,
                    "price": 20
                }
            ],
            "tips": "配送费¥6"
        },
        "promotion_info": "午高峰订单较多，欢迎提前订餐，如有稍微延误，敬请谅解！如有问题请拨打：13683059963。010-53603790\n\n款款爆品，专治选择困难症。食材到口味，无一不经过黄太吉的用心甄选。放心料，好味道，黄太吉不仅关注您的健康，更专注于为您提供极致的用餐体验！",
        "rating": 4.6,
        "rating_count": 0,
        "recent_order_num": 1509,
        "recommend": {
            "is_ad": false,
            "reason": ""
        },
        "regular_customer_count": 0,
        "status": 1,
        "supports": [
            {
                "description": "已加入“外卖保”计划，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "外卖保"
            },
            {
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票"
            }
        ],
        "type": 0
    },
    
    
    
    {
        "activities": [
            {
                "attribute": "17.0",
                "description": "新用户下单立减17.0元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 45999129,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减",
                "tips": "新用户下单立减17.0元",
                "type": 103
            },
            {
                "attribute": "{\"99\": {\"1\": 30.0, \"0\": 0}, \"35\": {\"1\": 10.0, \"0\": 0}, \"69\": {\"1\": 20.0, \"0\": 0}}",
                "description": "满35减10，满69减20，满99减30",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 75594537,
                "is_exclusive_with_food_activity": true,
                "name": "热辣",
                "tips": "满35减10，满69减20，满99减30",
                "type": 102
            },
            {
                "description": "皮皮虾半价",
                "icon_color": "f07373",
                "icon_name": "特",
                "id": 84882753,
                "name": "皮皮虾半价",
                "tips": "皮皮虾半价"
            },
            {
                "description": "双人套餐",
                "icon_color": "f07373",
                "icon_name": "特",
                "id": 84881505,
                "name": "双人套餐",
                "tips": "双人套餐"
            },
            {
                "description": "热辣五折嗨",
                "icon_color": "f07373",
                "icon_name": "特",
                "id": 83799097,
                "name": "热辣五折嗨",
                "tips": "热辣五折嗨"
            }
        ],
        "address": "北京市东城区崇文门外大街18号1幢LG-D9",
        "authentic_id": 4371508615103044,
        "delivery_mode": {
            "color": "2395FF",
            "gradient": {
                "rgb_from": "00AAFF",
                "rgb_to": "0085FF"
            },
            "id": 1,
            "is_solid": true,
            "text": "蜂鸟专送"
        },
        "description": "热辣生活是全国著名餐饮品牌麻辣诱惑旗下的熟食连锁品牌。产品涵盖卤味、精美凉菜、热食、饮品等。 品牌创建于2010年7月，产品类别30个以上，品牌追求实惠、便捷、多样的现代饮食方式；",
        "distance": 1912,
        "favored": false,
        "float_delivery_fee": 5,
        "float_minimum_order_amount": 20,
        "id": 150135844,
        "image_path": "d3317704c6e007088bf0f87b5f19c6fcpng",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 39.898515,
        "longitude": 116.419283,
        "max_applied_quantity_per_order": -1,
        "name": "热辣生活·麻辣诱惑(崇文门店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
            "10:00/21:30"
        ],
        "order_lead_time": 29,
        "phone": "87555705",
        "piecewise_agent_fee": {
            "description": "配送费¥5",
            "extra_fee": 0,
            "is_extra": false,
            "rules": [
                {
                    "fee": 5,
                    "price": 20
                }
            ],
            "tips": "配送费¥5"
        },
        "promotion_info": "麻辣诱惑旗下品牌，卤味之鲜，尽在热辣生活~\n目前仅支持电子发票。",
        "rating": 4.8,
        "rating_count": 0,
        "recent_order_num": 263,
        "recommend": {
            "is_ad": false,
            "reason": ""
        },
        "regular_customer_count": 0,
        "status": 1,
        "supports": [
            {
                "description": "已加入“外卖保”计划，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "外卖保"
            },
            {
                "description": "该商家支持开发票，开票订单金额1.0元起，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票"
            }
        ],
        "type": 0
    }

]
]


/*********************************************************************************发现页 *****************************************/
/*限时好礼*/
export const gift=[
    {
        "title": "iPhone7 32G",
        "image_hash": "05347a80976e90c99f40b745cde5246fjpeg",
        "points_required": 499,
        "original_price": 4499,
        "url": "https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Factivity.m.duiba.com.cn%2FsingleLottery%2Findex%3Fid%3D2446619",
        "corner_marker": "0元抽奖"
    },
    {
        "title": "7元饿了么红包",
        "image_hash": "aa2206f0d7fa5af4b349b641fa35e730jpeg",
        "points_required": 3500,
        "original_price": 7,
        "url": "https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Fgoods.m.duiba.com.cn%2Fmobile%2FappItemDetail%3FappItemId%3D1143916",
        "corner_marker": "0元兑换"
    },
    {
        "title": "月圆中秋 与你蟹逅",
        "image_hash": "6f0821c62d0cfdeb71214255adfa2da1jpeg",
        "points_required": 599,
        "original_price": 0,
        "url": "https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Factivity.m.duiba.com.cn%2Fnewtools%2Findex%3Fid%3D2437400",
        "corner_marker": "0元抽奖"
    }
]

/*头部数据*/
export const entryData={
    "1": [
        {
            "id": 6,
            "block_index": 1,
            "title": "积分商城",
            "title_color": "#ff9700",
            "subtitle": "0元好物在这里！",
            "main_pic_hash": "8389c9aea0e856149083d84af3444b78jpeg",
            "sub_pic_hash": "",
            "content_url": "https://h5.ele.me/exchange/",
            "ubt_stats_id": 0
        },
        {
            "id": 400012,
            "block_index": 1,
            "title": "必吃爆料",
            "title_color": "#f5785d",
            "subtitle": "最夯外卖指南",
            "main_pic_hash": "eff3b9c4a4dfda1df548dc9274f6a7c1jpeg",
            "sub_pic_hash": "",
            "content_url": "https://app-resource.ele.me/prod/By9p0RYVZ.html",
            "ubt_stats_id": 0
        },
        {
            "id": 400013,
            "block_index": 1,
            "title": "推荐有奖",
            "title_color": "#1ba9e1",
            "subtitle": "5元现金拿不停",
            "main_pic_hash": "6768d42eef97ff4c1c2b671085358541jpeg",
            "sub_pic_hash": "",
            "content_url": "https://h5.ele.me/commend/#/",
            "ubt_stats_id": 0
        },
        {
            "id": 400041,
            "block_index": 1,
            "title": "周边优惠",
            "title_color": "#ed6660",
            "subtitle": "领取口碑好券",
            "main_pic_hash": "5102351e989d4171479ba0d7b5c06053jpeg",
            "sub_pic_hash": "",
            "content_url": "/discover/koubei/",
            "ubt_stats_id": 0
        }
    ],
    "2": [
        {
            "id": 400011,
            "block_index": 2,
            "title": "霸王餐",
            "title_color": "#ff9700",
            "subtitle": "今天吃饭不要钱",
            "main_pic_hash": "85a5e3ac248cf218a5e0a6611028dd45jpeg",
            "sub_pic_hash": "b6d656006edcd86033a1b32b23ddea37jpeg",
            "content_url": "https://h5.ele.me/freelunch/#/",
            "ubt_stats_id": 0
        }
    ]
}

/*美食推荐*/
/*https://restapi.ele.me/hotfood/v1/guess/likes?latitude=89574&longitude=1353&offset=0&limit=3&request_id=2db29982-f761-44cf-9d62-b5a3aa497440&tag_id=-1&columns=1*/

export const GoodFoods=[
    {
        "style": 1,
        "restaurant": {
            "id": 2102001,
            "name": "百万庄园西餐（望京店）",
            "latitude": 39.98592,
            "longitude": 116.47019,
            "description": "",
            "phone": "010-64730671",
            "promotion_info": "",
            "is_premium": false,
            "recent_order_num": 51,
            "image_path": "02709b30163bb8556a92432af5000629png",
            "is_new": false,
            "address": "北京市朝阳区望京中环南路9号望京大厦A座一层",
            "opening_hours": [
                "10:00/21:00"
            ],
            "status": 1,
            "supports": [
                {
                    "id": 7,
                    "name": "外卖保",
                    "icon_name": "保",
                    "icon_color": "999999",
                    "description": "已加入“外卖保”计划，食品安全有保障"
                },
                {
                    "id": 4,
                    "name": "开发票",
                    "icon_name": "票",
                    "icon_color": "999999",
                    "description": "该商家支持开发票，请在下单时填写好发票抬头"
                },
                {
                    "id": 9,
                    "name": "准时达",
                    "icon_name": "准",
                    "icon_color": "57A9FF",
                    "description": "准时必达，超时秒赔"
                }
            ],
            "next_business_time": "",
            "delivery_mode": {
                "id": 1,
                "text": "蜂鸟专送",
                "color": "57A9FF",
                "is_solid": true
            },
            "only_use_poi": false,
            "closing_count_down": 0,
            "distance": 1301,
            "order_lead_time": 41,
            "rating_count": 14,
            "rating": 4.4,
            "float_minimum_order_amount": 20,
            "float_delivery_fee": 5,
            "piecewise_agent_fee": {
                "description": "配送费5元",
                "is_extra": false,
                "rules": [
                    {
                        "price": 20,
                        "fee": 5
                    }
                ],
                "extra_fee": 0,
                "tips": "配送费5元"
            },
            "activities": [],
            "regular_customer_count": 0
        },
        "foods": [
            {
                "id": 186234569,
                "restaurant_id": 2102001,
                "name": "奥尔良烤翅1对",
                "price": 9,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "95bc227512eaa0e6fc0970a988bda338jpeg",
                "original_price": 9,
                "description": "",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 0,
                "num_rating_5": 0,
                "attribute": "{}",
                "created_at": null,
                "category_id": 18977404,
                "updated_at": null,
                "pinyin_name": "aoerliangkaochi1dui",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 3,
                "recent_rating": 0,
                "stock": 975,
                "max_stock": 1000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 0,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "百万庄园西餐（望京店）",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 186244896,
                "restaurant_id": 2102001,
                "name": "意大利肉酱意面",
                "price": 27,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "ad828e26a82a02460ae84c26d14c13ccjpeg",
                "original_price": 27,
                "description": "意大利肉酱意面配蔬菜沙拉",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 2,
                "num_rating_5": 2,
                "attribute": "{}",
                "created_at": null,
                "category_id": 511732308,
                "updated_at": null,
                "pinyin_name": "yidaliroujiangyimian",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 7,
                "recent_rating": 4.5,
                "stock": 944,
                "max_stock": 1000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 0,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "百万庄园西餐（望京店）",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 571995981,
                "restaurant_id": 2102001,
                "name": "伯尔尼番茄焗饭套餐",
                "price": 29.9,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "8011c2864ffcba12a868652701754b6fjpeg",
                "original_price": 29.9,
                "description": "伯尔尼番茄焗饭、奥尔良烤翅1对、红粉佳人或金桔柠檬(2选1)",
                "num_rating_1": 0,
                "num_rating_2": 1,
                "num_rating_3": 0,
                "num_rating_4": 1,
                "num_rating_5": 1,
                "attribute": "{}",
                "created_at": null,
                "category_id": 511949455,
                "updated_at": null,
                "pinyin_name": "boernifanqiejufantaocan",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 6,
                "recent_rating": 3.67,
                "stock": 968,
                "max_stock": 1000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 2,
                "sort_order": 10000,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "百万庄园西餐（望京店）",
                "rec_tag": null,
                "rec_reasons": null
            }
        ],
        "toRecPage": 1
    },
    {
        "style": 1,
        "restaurant": {
            "id": 154013169,
            "name": "韩国料理",
            "latitude": 39.978634,
            "longitude": 116.460825,
            "description": "现压荞麦冷面，佐以辣白菜，黄瓜丝，鸡蛋，西瓜，西红柿等，夏日清凉爽口，酸汤开胃！",
            "phone": "13341441149",
            "promotion_info": "本店采用现压荞麦冷面，寿司，石锅拌饭等均采用新鲜上等食材，请放心食用！",
            "is_premium": false,
            "recent_order_num": 34,
            "image_path": "cf759dbf46f8b6e96a1759f29a457da4jpeg",
            "is_new": false,
            "address": "北京市朝阳区宜居南路2号楼地下一层B-K01至B-k22",
            "opening_hours": [
                "10:00/20:10"
            ],
            "status": 1,
            "supports": [
                {
                    "id": 7,
                    "name": "外卖保",
                    "icon_name": "保",
                    "icon_color": "999999",
                    "description": "已加入“外卖保”计划，食品安全有保障"
                },
                {
                    "id": 9,
                    "name": "准时达",
                    "icon_name": "准",
                    "icon_color": "57A9FF",
                    "description": "准时必达，超时秒赔"
                }
            ],
            "next_business_time": "",
            "delivery_mode": {
                "id": 1,
                "text": "蜂鸟专送",
                "color": "57A9FF",
                "is_solid": true
            },
            "only_use_poi": false,
            "closing_count_down": 0,
            "distance": 796,
            "order_lead_time": 0,
            "rating_count": 0,
            "rating": 4.4,
            "float_minimum_order_amount": 20,
            "float_delivery_fee": 5,
            "piecewise_agent_fee": {
                "description": "配送费5元",
                "is_extra": false,
                "rules": [
                    {
                        "price": 20,
                        "fee": 5
                    }
                ],
                "extra_fee": 0,
                "tips": "配送费5元"
            },
            "activities": [],
            "regular_customer_count": 0
        },
        "foods": [
            {
                "id": 631873255,
                "restaurant_id": 154013169,
                "name": "韩式温面",
                "price": 21,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "00fee0f0390158d69d6c91ae5b73c8e5jpeg",
                "original_price": 0,
                "description": "韩式温面，是一道美食，主要制作材料有龙须面、鸡蛋、鸡腿、西葫芦等。\n",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 0,
                "num_rating_5": 0,
                "attribute": "{}",
                "created_at": null,
                "category_id": 515706260,
                "updated_at": null,
                "pinyin_name": "hanshiwenmian",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 1,
                "recent_rating": 0,
                "stock": 9997,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 4,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "韩国料理",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 631869737,
                "restaurant_id": 154013169,
                "name": "韩式炸酱面",
                "price": 21,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "9e6057325d8fd9fc2555e7f0da014bb2jpeg",
                "original_price": 0,
                "description": "劲道面条，秘制炸酱，配上胡萝卜丝，黄瓜丝，味道棒极了",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 0,
                "num_rating_5": 0,
                "attribute": "{}",
                "created_at": null,
                "category_id": 515706260,
                "updated_at": null,
                "pinyin_name": "hanshizhajiangmian",
                "is_new": 0,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 0,
                "sn": null,
                "recent_popularity": 1,
                "recent_rating": 0,
                "stock": 9993,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 3,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "韩国料理",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 631910898,
                "restaurant_id": 154013169,
                "name": "什锦包饭",
                "price": 16,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "137a02f73f93e0f55b6ba82e19be24d9jpeg",
                "original_price": 0,
                "description": "选用新鲜食材，优质紫菜，特色沙拉酱！",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 0,
                "num_rating_5": 0,
                "attribute": "{}",
                "created_at": null,
                "category_id": 515707337,
                "updated_at": null,
                "pinyin_name": "shijinbaofan",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 1,
                "recent_rating": 0,
                "stock": 9996,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 4,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "韩国料理",
                "rec_tag": null,
                "rec_reasons": null
            }
        ],
        "toRecPage": 1
    },
    {
        "style": 1,
        "restaurant": {
            "id": 1783855,
            "name": "金籣郡南洋菜",
            "latitude": 39.971398,
            "longitude": 116.435955,
            "description": "",
            "phone": "64527377",
            "promotion_info": "唯美食与爱不可辜负",
            "is_premium": false,
            "recent_order_num": 82,
            "image_path": "8d0b1ab56904873d9b030e15c284e32fpng",
            "is_new": false,
            "address": "北京市朝阳区七圣中街12号院2号楼4层401内F4002B-B-2",
            "opening_hours": [
                "10:30/14:00",
                "17:00/21:30"
            ],
            "status": 4,
            "supports": [
                {
                    "id": 7,
                    "name": "外卖保",
                    "icon_name": "保",
                    "icon_color": "999999",
                    "description": "已加入“外卖保”计划，食品安全有保障"
                },
                {
                    "id": 9,
                    "name": "准时达",
                    "icon_name": "准",
                    "icon_color": "57A9FF",
                    "description": "准时必达，超时秒赔"
                }
            ],
            "next_business_time": "",
            "delivery_mode": {
                "id": 1,
                "text": "蜂鸟专送",
                "color": "57A9FF",
                "is_solid": true
            },
            "only_use_poi": false,
            "closing_count_down": 0,
            "distance": 2168,
            "order_lead_time": 44,
            "rating_count": 48,
            "rating": 4.6,
            "float_minimum_order_amount": 20,
            "float_delivery_fee": 5,
            "piecewise_agent_fee": {
                "description": "配送费5元",
                "is_extra": false,
                "rules": [
                    {
                        "price": 20,
                        "fee": 5
                    }
                ],
                "extra_fee": 0,
                "tips": "配送费5元"
            },
            "activities": [],
            "regular_customer_count": 0
        },
        "foods": [
            {
                "id": 523174588,
                "restaurant_id": 1783855,
                "name": "菲律宾菠萝海鲜炒饭",
                "price": 39,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "4cd52f05ec62e6e521869fe4dcc8b151jpeg",
                "original_price": 0,
                "description": "",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 0,
                "num_rating_5": 0,
                "attribute": "{}",
                "created_at": null,
                "category_id": 503051885,
                "updated_at": null,
                "pinyin_name": "feilu:binboluohaixianchaofan",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 8,
                "recent_rating": 0,
                "stock": 9941,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 0,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "金籣郡南洋菜",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 1265317679,
                "restaurant_id": 1783855,
                "name": "马来咖喱鸡（小份）",
                "price": 29,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "97775c592bb22fbf9cb23f9cec4e8a53jpeg",
                "original_price": 0,
                "description": "",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 4,
                "num_rating_5": 1,
                "attribute": "{}",
                "created_at": null,
                "category_id": 1229948743,
                "updated_at": null,
                "pinyin_name": "malaigaliji（xiaofen）",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 8,
                "recent_rating": 4.2,
                "stock": 9992,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 0,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "金籣郡南洋菜",
                "rec_tag": null,
                "rec_reasons": null
            },
            {
                "id": 523174587,
                "restaurant_id": 1783855,
                "name": "娘惹酸菜牛肉炒饭",
                "price": 29,
                "is_valid": 1,
                "image_url": "",
                "image_hash": "82f86a1437ff60b8a13ad3ee3aa1e432jpeg",
                "original_price": 0,
                "description": "",
                "num_rating_1": 0,
                "num_rating_2": 0,
                "num_rating_3": 0,
                "num_rating_4": 1,
                "num_rating_5": 1,
                "attribute": "{}",
                "created_at": null,
                "category_id": 503051885,
                "updated_at": null,
                "pinyin_name": "niangresuancainiurouchaofan",
                "is_new": 1,
                "is_featured": 1,
                "is_gum": null,
                "is_spicy": 1,
                "sn": null,
                "recent_popularity": 14,
                "recent_rating": 4.5,
                "stock": 9916,
                "max_stock": 10000,
                "daily_reset": false,
                "price_changed_at": null,
                "has_activity": null,
                "packing_fee": 1,
                "sort_order": 0,
                "sold_out": 0,
                "sale_mode": 0,
                "restaurant_name": "金籣郡南洋菜",
                "rec_tag": null,
                "rec_reasons": null
            }
        ],
        "toRecPage": 1
    }
]

/*天天特价https://restapi.ele.me/shopping/v1/sale_list_index?type=special_food&latitude=12332&longitude=321&params=%7B%7D*/
/*取前三个*/
export const goodPriceData={
    "description": "",
    "header_image": "6d5de7613f554b5db1380f266097504bjpeg",
    "more_url": "eleme://web?url=https%3A%2F%2Fh5.ele.me%2Franking%2F%23type%3Dspecial_food&navType=2",
    "page_title": "天天特价",
    "query_list": [
        {
            "foods": [
                {
                    "category_id": 526683406,
                    "discount_activity": "",
                    "discount_rate": 0.6,
                    "food_id": 1239488786,
                    "food_rate": "349人好评",
                    "icon_name": "折",
                    "id": 1239488786,
                    "image_path": "43c7102877e464e166420cb2a7a8e0a2jpeg",
                    "is_new": false,
                    "month_sales": 1533,
                    "name": "黄焖鸡小份➕金针菇➕土豆➕米饭➕果汁饮料",
                    "original_price": 29.99,
                    "packing_fee": 2,
                    "price": 17.99,
                    "restaurant_id": 156709821,
                    "restaurant_name": "上吉铺黄焖鸡",
                    "satisfy_count": 349,
                    "satisfy_rate": 96,
                    "sku_id": "200000040436517129",
                    "stock": 9403
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 526678659,
                    "discount_activity": "",
                    "discount_rate": 0.69,
                    "food_id": 691175962,
                    "food_rate": "15人好评",
                    "icon_name": "特",
                    "id": 691175962,
                    "image_path": "aad4938fd134e8e49d44857b5ba70adejpeg",
                    "is_new": false,
                    "month_sales": 70,
                    "name": "大份黄焖排骨（微辣）米饭",
                    "original_price": 39,
                    "packing_fee": 2,
                    "price": 26.9,
                    "restaurant_id": 156817832,
                    "restaurant_name": "黄焖鸡米饭（芍药居店）",
                    "satisfy_count": 15,
                    "satisfy_rate": 100,
                    "sku_id": "308124184715",
                    "stock": 9889
                }
            ]
        },
        {
            "foods": [
                /*****************************************************************************************************************/
                {
                    "category_id": 14064004,
                    "discount_activity": "",
                    "discount_rate": 0.56,
                    "food_id": 142827707,
                    "food_rate": "23人好评",
                    "icon_name": "特",
                    "id": 142827707,
                    "image_path": "14afc6ef31e6cff4c4834f9945fd1bf7jpeg",
                    "is_new": false,
                    "month_sales": 115,
                    "name": "咖喱牛肉+可乐+卤蛋",
                    "original_price": 42.5,
                    "packing_fee": 2,
                    "price": 23.9,
                    "restaurant_id": 1093532,
                    "restaurant_name": "二十五块半（太阳宫店）",
                    "satisfy_count": 23,
                    "satisfy_rate": 100,
                    "sku_id": "14613882171",
                    "stock": 9809
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 514481819,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 600701730,
                    "food_rate": "24人好评",
                    "icon_name": "特",
                    "id": 600701730,
                    "image_path": "22cd57f7e67e86742824ff4125361263jpeg",
                    "is_new": false,
                    "month_sales": 112,
                    "name": "低脂藤椒酸菜鱼单人套餐",
                    "original_price": 46,
                    "packing_fee": 2,
                    "price": 22.9,
                    "restaurant_id": 1304802,
                    "restaurant_name": "年年余老坛酸菜鱼（望京店）",
                    "satisfy_count": 24,
                    "satisfy_rate": 100,
                    "sku_id": "215478571732",
                    "stock": 9734
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 524924224,
                    "discount_activity": "",
                    "discount_rate": 0.51,
                    "food_id": 129072397,
                    "food_rate": "20人好评",
                    "icon_name": "爽",
                    "id": 129072397,
                    "image_path": "da1dd2381962b803a07ac766c65f4d8ejpeg",
                    "is_new": false,
                    "month_sales": 134,
                    "name": "酸菜鱼",
                    "original_price": 78,
                    "packing_fee": 1,
                    "price": 39.9,
                    "restaurant_id": 662685,
                    "restaurant_name": "大鸭梨烤鸭（左家庄店）",
                    "satisfy_count": 20,
                    "satisfy_rate": 95,
                    "sku_id": "11803524865",
                    "stock": 9802
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 528111569,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 706515032,
                    "food_rate": "7人好评",
                    "icon_name": "折",
                    "id": 706515032,
                    "image_path": "5774afede11df42705df3edd6a9562b4jpeg",
                    "is_new": false,
                    "month_sales": 34,
                    "name": "醉秋风（双人餐）",
                    "original_price": 74,
                    "packing_fee": 2,
                    "price": 37,
                    "restaurant_id": 558548,
                    "restaurant_name": "台资味（北京左家庄店）",
                    "satisfy_count": 7,
                    "satisfy_rate": 77,
                    "sku_id": "323831392481",
                    "stock": 9965
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 527120038,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 695418350,
                    "food_rate": "33人好评",
                    "icon_name": "折",
                    "id": 695418350,
                    "image_path": "add390f67c368a41e3f10e0bbcde715ejpeg",
                    "is_new": false,
                    "month_sales": 129,
                    "name": "秋天的童话",
                    "original_price": 68,
                    "packing_fee": 1,
                    "price": 34,
                    "restaurant_id": 156984218,
                    "restaurant_name": "将太无二（北京爱琴海餐厅）",
                    "satisfy_count": 33,
                    "satisfy_rate": 91,
                    "sku_id": "312468390358",
                    "stock": 9866
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 14064004,
                    "discount_activity": "",
                    "discount_rate": 0.56,
                    "food_id": 142827088,
                    "food_rate": "18人好评",
                    "icon_name": "特",
                    "id": 142827088,
                    "image_path": "5526408949aa6d9dcc662b422647daa3jpeg",
                    "is_new": false,
                    "month_sales": 98,
                    "name": "梅菜扣肉+可乐+卤蛋",
                    "original_price": 42.5,
                    "packing_fee": 2,
                    "price": 23.9,
                    "restaurant_id": 1093532,
                    "restaurant_name": "二十五块半（太阳宫店）",
                    "satisfy_count": 18,
                    "satisfy_rate": 100,
                    "sku_id": "14613881147",
                    "stock": 9961
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 526062135,
                    "discount_activity": "",
                    "discount_rate": 0.85,
                    "food_id": 684902206,
                    "food_rate": "12人好评",
                    "icon_name": "特",
                    "id": 684902206,
                    "image_path": "e003eb8160bcc0b2f705e37f3b980099jpeg",
                    "is_new": false,
                    "month_sales": 51,
                    "name": "白领商务餐",
                    "original_price": 30,
                    "packing_fee": 1,
                    "price": 25.5,
                    "restaurant_id": 556878,
                    "restaurant_name": "杨国福麻辣烫（三元桥1店）",
                    "satisfy_count": 12,
                    "satisfy_rate": 100,
                    "sku_id": "301699859395",
                    "stock": 9889
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 1229835355,
                    "discount_activity": "",
                    "discount_rate": 0.4,
                    "food_id": 1261316550,
                    "food_rate": "27人好评",
                    "icon_name": "特",
                    "id": 1261316550,
                    "image_path": "650b6e2847eb3d9ba2e82fb34d3ba0b9jpeg",
                    "is_new": false,
                    "month_sales": 72,
                    "name": "烧仙草奶茶",
                    "original_price": 14,
                    "packing_fee": 0,
                    "price": 5.6,
                    "restaurant_id": 157111760,
                    "restaurant_name": "茶尼玛(芍药居店)",
                    "satisfy_count": 27,
                    "satisfy_rate": 100,
                    "sku_id": "200000062788147667",
                    "stock": 9923
                }
            ]
        },
        {
            /*************************************************************************************************/
            "foods": [
                {
                    "category_id": 524366845,
                    "discount_activity": "",
                    "discount_rate": 0.85,
                    "food_id": 664337136,
                    "food_rate": "38人好评",
                    "icon_name": "特",
                    "id": 664337136,
                    "image_path": "c20602064fff9b7d7655ad6c4a26cf95jpeg",
                    "is_new": false,
                    "month_sales": 252,
                    "name": "黄焖鸡小份",
                    "original_price": 22,
                    "packing_fee": 1,
                    "price": 18.7,
                    "restaurant_id": 2174898,
                    "restaurant_name": "杨铭宇黄焖鸡米饭(博泰国际店)",
                    "satisfy_count": 38,
                    "satisfy_rate": 92,
                    "sku_id": "280641227387",
                    "stock": 9167
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 1229043841,
                    "discount_activity": "",
                    "discount_rate": 0.66,
                    "food_id": 707703410,
                    "food_rate": "3人好评",
                    "icon_name": "特",
                    "id": 707703410,
                    "image_path": "716d8947b51cf7448b80598cea2ea4bejpeg",
                    "is_new": false,
                    "month_sales": 15,
                    "name": "双人商务套餐",
                    "original_price": 42.8,
                    "packing_fee": 2,
                    "price": 28.25,
                    "restaurant_id": 156902519,
                    "restaurant_name": "抚顺6街麻辣拌",
                    "satisfy_count": 3,
                    "satisfy_rate": 100,
                    "sku_id": "325048291412",
                    "stock": 9982
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 514481819,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 600670244,
                    "food_rate": "11人好评",
                    "icon_name": "特",
                    "id": 600670244,
                    "image_path": "37d7ff2225a4179c037ef7af9d0cb4fdjpeg",
                    "is_new": false,
                    "month_sales": 51,
                    "name": "低脂酸萝卜酸菜鱼单人套餐",
                    "original_price": 46,
                    "packing_fee": 2,
                    "price": 22.9,
                    "restaurant_id": 1304802,
                    "restaurant_name": "年年余老坛酸菜鱼（望京店）",
                    "satisfy_count": 11,
                    "satisfy_rate": 91,
                    "sku_id": "215446330068",
                    "stock": 9836
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 18761551,
                    "discount_activity": "",
                    "discount_rate": 0.48,
                    "food_id": 184446257,
                    "food_rate": "2人好评",
                    "icon_name": "特",
                    "id": 184446257,
                    "image_path": "22a650c42b1464d7799ff0de7c5f1863jpeg",
                    "is_new": false,
                    "month_sales": 19,
                    "name": "北京烤鸭",
                    "original_price": 82.9,
                    "packing_fee": 1,
                    "price": 39.95,
                    "restaurant_id": 2014210,
                    "restaurant_name": "合之叶手工春饼(凯德购物中心店)",
                    "satisfy_count": 2,
                    "satisfy_rate": 100,
                    "sku_id": "62605934928",
                    "stock": 9979
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 515910168,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 1260104149,
                    "food_rate": "12人好评",
                    "icon_name": "折",
                    "id": 1260104149,
                    "image_path": "ad8a4e8292f575e280907c0d9c1040f3jpeg",
                    "is_new": false,
                    "month_sales": 30,
                    "name": "馨享双人套餐",
                    "original_price": 54,
                    "packing_fee": 2,
                    "price": 27,
                    "restaurant_id": 2143616,
                    "restaurant_name": "U味儿（西坝河晋陇轩店）",
                    "satisfy_count": 12,
                    "satisfy_rate": 100,
                    "sku_id": "200000061546649373",
                    "stock": 747
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 13795401,
                    "discount_activity": "",
                    "discount_rate": 0.62,
                    "food_id": 140374882,
                    "food_rate": "24人好评",
                    "icon_name": "特",
                    "id": 140374882,
                    "image_path": "c5c47545c51e588156b271b4f63a5418jpeg",
                    "is_new": false,
                    "month_sales": 113,
                    "name": "经典B套餐",
                    "original_price": 56.8,
                    "packing_fee": 2,
                    "price": 35.22,
                    "restaurant_id": 1414635,
                    "restaurant_name": "刘氏麻辣香锅",
                    "satisfy_count": 24,
                    "satisfy_rate": 100,
                    "sku_id": "12063480786",
                    "stock": 9982
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 9624160,
                    "discount_activity": "",
                    "discount_rate": 0.88,
                    "food_id": 529524524,
                    "food_rate": "20人好评",
                    "icon_name": "特",
                    "id": 529524524,
                    "image_path": "fd01c4eba166b2e2e299faf8476672d0jpeg",
                    "is_new": false,
                    "month_sales": 90,
                    "name": "鱼众不同冒菜套餐",
                    "original_price": 42,
                    "packing_fee": 2,
                    "price": 37,
                    "restaurant_id": 161309,
                    "restaurant_name": "U鼎冒菜（西坝河爱琴海店）",
                    "satisfy_count": 20,
                    "satisfy_rate": 100,
                    "sku_id": "142593112912",
                    "stock": 9794
                }
            ]
        },
        {
            "foods": [
                /******************************************************************************************************************************/
                {
                    "category_id": 526678659,
                    "discount_activity": "",
                    "discount_rate": 0.66,
                    "food_id": 710390702,
                    "food_rate": "2人好评",
                    "icon_name": "特",
                    "id": 710390702,
                    "image_path": "2c21161eaeeb0d6dd03321453faaacf0jpeg",
                    "is_new": false,
                    "month_sales": 11,
                    "name": "大份黄焖排骨（微辣）+米饭+六个核桃",
                    "original_price": 45,
                    "packing_fee": 2,
                    "price": 29.8,
                    "restaurant_id": 156817832,
                    "restaurant_name": "黄焖鸡米饭（芍药居店）",
                    "satisfy_count": 2,
                    "satisfy_rate": 100,
                    "sku_id": "327800078475",
                    "stock": 9989
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 511692960,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 548526092,
                    "food_rate": "22人好评",
                    "icon_name": "特",
                    "id": 548526092,
                    "image_path": "b3414fde93dfe2d491d9002257c8860bjpeg",
                    "is_new": false,
                    "month_sales": 126,
                    "name": "肉香满溢披萨12寸",
                    "original_price": 75,
                    "packing_fee": 2,
                    "price": 37.5,
                    "restaurant_id": 150139540,
                    "restaurant_name": "骑士披萨店",
                    "satisfy_count": 22,
                    "satisfy_rate": 100,
                    "sku_id": "162050718022",
                    "stock": 8963
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 501604154,
                    "discount_activity": "",
                    "discount_rate": 0.69,
                    "food_id": 697023825,
                    "food_rate": "1人好评",
                    "icon_name": "特",
                    "id": 697023825,
                    "image_path": "b9a3d46e39fdce94c969609f4f30c642jpeg",
                    "is_new": false,
                    "month_sales": 1,
                    "name": "重庆毛血旺",
                    "original_price": 58,
                    "packing_fee": 1,
                    "price": 39.9,
                    "restaurant_id": 2143474,
                    "restaurant_name": "金百万烤鸭（西坝河晋陇轩店）",
                    "satisfy_count": 1,
                    "satisfy_rate": 100,
                    "sku_id": "314112396371",
                    "stock": 0
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 515910168,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 686096505,
                    "food_rate": "0人好评",
                    "icon_name": "折",
                    "id": 686096505,
                    "image_path": "51f9ac426e047a6decf1340bfcde39c6jpeg",
                    "is_new": false,
                    "month_sales": 6,
                    "name": "共享双人套餐",
                    "original_price": 74,
                    "packing_fee": 2,
                    "price": 37,
                    "restaurant_id": 2143616,
                    "restaurant_name": "U味儿（西坝河晋陇轩店）",
                    "satisfy_count": 0,
                    "satisfy_rate": 0,
                    "sku_id": "302922821405",
                    "stock": 773
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 13193214,
                    "discount_activity": "",
                    "discount_rate": 0.8,
                    "food_id": 133428252,
                    "food_rate": "5人好评",
                    "icon_name": "特",
                    "id": 133428252,
                    "image_path": "348d43d5101c9e4a3d32c41e4c81d93djpeg",
                    "is_new": false,
                    "month_sales": 37,
                    "name": "超值套餐六",
                    "original_price": 34,
                    "packing_fee": 0,
                    "price": 27.2,
                    "restaurant_id": 1322864,
                    "restaurant_name": "麦特派",
                    "satisfy_count": 5,
                    "satisfy_rate": 100,
                    "sku_id": "14722158036",
                    "stock": 9932
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 524478898,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 686073852,
                    "food_rate": "3人好评",
                    "icon_name": "特",
                    "id": 686073852,
                    "image_path": "ff292193ac4045269a8195df161c2ffcjpeg",
                    "is_new": false,
                    "month_sales": 40,
                    "name": "共享双人套餐",
                    "original_price": 74,
                    "packing_fee": 2,
                    "price": 37,
                    "restaurant_id": 2143474,
                    "restaurant_name": "金百万烤鸭（西坝河晋陇轩店）",
                    "satisfy_count": 3,
                    "satisfy_rate": 100,
                    "sku_id": "302899624019",
                    "stock": 554
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 13193214,
                    "discount_activity": "",
                    "discount_rate": 0.8,
                    "food_id": 133430895,
                    "food_rate": "3人好评",
                    "icon_name": "特",
                    "id": 133430895,
                    "image_path": "6f304e515b1e41198219029fc422d58djpeg",
                    "is_new": false,
                    "month_sales": 16,
                    "name": "超值套餐七",
                    "original_price": 40,
                    "packing_fee": 0,
                    "price": 32,
                    "restaurant_id": 1322864,
                    "restaurant_name": "麦特派",
                    "satisfy_count": 3,
                    "satisfy_rate": 75,
                    "sku_id": "14722159060",
                    "stock": 9782
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 9624160,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 706243096,
                    "food_rate": "12人好评",
                    "icon_name": "折",
                    "id": 706243096,
                    "image_path": "83705882fa51a47e82d9ef9102ef20dbjpeg",
                    "is_new": false,
                    "month_sales": 55,
                    "name": "三荤三素冒菜套餐",
                    "original_price": 53,
                    "packing_fee": 2,
                    "price": 26.5,
                    "restaurant_id": 161309,
                    "restaurant_name": "U鼎冒菜（西坝河爱琴海店）",
                    "satisfy_count": 12,
                    "satisfy_rate": 100,
                    "sku_id": "323552930640",
                    "stock": 9943
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 524758314,
                    "discount_activity": "",
                    "discount_rate": 0.7,
                    "food_id": 668230728,
                    "food_rate": "9人好评",
                    "icon_name": "折",
                    "id": 668230728,
                    "image_path": "9fd9b14cf9506bb7792e48040886088ajpeg",
                    "is_new": false,
                    "month_sales": 42,
                    "name": "金针菇牛肉卷定食",
                    "original_price": 45,
                    "packing_fee": 0,
                    "price": 31.5,
                    "restaurant_id": 382036,
                    "restaurant_name": "晚枫亭日式料理餐厅(静安庄店)",
                    "satisfy_count": 9,
                    "satisfy_rate": 100,
                    "sku_id": "284628265222",
                    "stock": 9922
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 511540736,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 546473155,
                    "food_rate": "1人好评",
                    "icon_name": "折",
                    "id": 546473155,
                    "image_path": "4621d5c3fccfe3b1ac54d73577e94327jpeg",
                    "is_new": false,
                    "month_sales": 3,
                    "name": "超值套餐C",
                    "original_price": 80,
                    "packing_fee": 2,
                    "price": 40,
                    "restaurant_id": 147056135,
                    "restaurant_name": "川府麻辣烫",
                    "satisfy_count": 1,
                    "satisfy_rate": 100,
                    "sku_id": "159948510550",
                    "stock": 9992
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 524398453,
                    "discount_activity": "",
                    "discount_rate": 0.85,
                    "food_id": 664565772,
                    "food_rate": "4人好评",
                    "icon_name": "特",
                    "id": 664565772,
                    "image_path": "e98150a464f7615e51b19f122d9df14ejpeg",
                    "is_new": false,
                    "month_sales": 17,
                    "name": "香辣烤鱼",
                    "original_price": 68,
                    "packing_fee": 1,
                    "price": 58,
                    "restaurant_id": 156170035,
                    "restaurant_name": "馋上瘾麻辣香锅",
                    "satisfy_count": 4,
                    "satisfy_rate": 100,
                    "sku_id": "280875350170",
                    "stock": 9983
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 10706675,
                    "discount_activity": "",
                    "discount_rate": 0.5,
                    "food_id": 576301710,
                    "food_rate": "1人好评",
                    "icon_name": "特",
                    "id": 576301710,
                    "image_path": "d470da426c66f8b68e183ccbe8407b96jpeg",
                    "is_new": true,
                    "month_sales": 9,
                    "name": "【3】人超值餐",
                    "original_price": 90,
                    "packing_fee": 9,
                    "price": 45,
                    "restaurant_id": 1097149,
                    "restaurant_name": "青岛大叔排骨饭",
                    "satisfy_count": 1,
                    "satisfy_rate": 100,
                    "sku_id": "190492951513",
                    "stock": 9986
                }
            ]
        },
        {
            "foods": [
                {
                    "category_id": 526257235,
                    "discount_activity": "",
                    "discount_rate": 0.6,
                    "food_id": 686860165,
                    "food_rate": "3人好评",
                    "icon_name": "特",
                    "id": 686860165,
                    "image_path": "8319376f222aed2fdaadbeb8be8fb02ejpeg",
                    "is_new": false,
                    "month_sales": 58,
                    "name": "经典双人套餐",
                    "original_price": 59.8,
                    "packing_fee": 2,
                    "price": 35.88,
                    "restaurant_id": 155842512,
                    "restaurant_name": "傻二麻辣香锅(亚运村店)",
                    "satisfy_count": 3,
                    "satisfy_rate": 75,
                    "sku_id": "303704809073",
                    "stock": 9818
                }
            ]
        }
    ],
    "rank_id": "2877354f078948c8afc9c22a29ab090f",
    "rules": " ",
    "tabs": [
        {
            "name": "全部",
            "params": {
                "flavor_type": "1"
            }
        },
        {
            "name": "大牌特惠",
            "params": {
                "flavor_type": "2"
            }
        },
        {
            "name": "下午茶不贵",
            "params": {
                "flavor_type": "3"
            }
        },
        {
            "name": "商超百货",
            "params": {
                "flavor_type": "4"
            }
        },
        {
            "name": "水果生鲜",
            "params": {
                "flavor_type": "5"
            }
        },
        {
            "name": "鲜花蛋糕",
            "params": {
                "flavor_type": "6"
            }
        }
    ]
}


