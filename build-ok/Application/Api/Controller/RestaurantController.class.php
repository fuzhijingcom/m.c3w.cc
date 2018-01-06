<?php
namespace Api\Controller;
use Think\Controller;
class RestaurantController extends Controller {
    
	public function index(){
    	header("Content-type: text/html; charset=utf-8");
    	
    	$restaurant_id = I('restaurant_id');
    	
    	
    	if($restaurant_id == '150135844'){
    		
    		echo '{"activities":[{"attribute":"17.0","description":"新用户下单立减6元(不与其它活动同享)","icon_color":"70bc46","icon_name":"首","id":774092209,"is_exclusive_with_food_activity":true,"name":"新用户立减(不与其他活动共享)","tips":"新用户下单立减17元(不与其它活动同享)","type":103},{"attribute":"{\"149\": {\"1\": 35.0, \"0\": 0}, \"199\": {\"1\": 50.0, \"0\": 0}, \"109\": {\"1\": 25.0, \"0\": 0}, \"69\": {\"1\": 15.0, \"0\": 0}, \"39\": {\"1\": 7.0, \"0\": 0}}","description":"满39减7，满69减15，满109减25，满149减35，满199减50","icon_color":"f07373","icon_name":"减","id":267694538,"is_exclusive_with_food_activity":true,"name":"2018贺岁满减来喽","tips":"满39减7，满69减15，满109减25，满149减35，满199减50","type":102},{"description":"贺岁之双人嗨吃套餐～136元","icon_color":"f1884f","icon_name":"2","id":267732474,"name":"贺岁之双人嗨吃套餐～136元","tips":"贺岁之双人嗨吃套餐～136元"},{"description":"贺岁之大香辣皮皮虾～温暖带回家","icon_color":"f1884f","icon_name":"0","id":267730194,"name":"贺岁之大香辣皮皮虾～温暖带回家","tips":"贺岁之大香辣皮皮虾～温暖带回家"},{"description":"贺岁之微辣鸭脖～high辣带回家","icon_color":"f07373","icon_name":"元","id":267711042,"name":"贺岁之微辣鸭脖～high辣带回家","tips":"贺岁之微辣鸭脖～high辣带回家"},{"description":"贺岁之迷你去钳虾～幸福带回家","icon_color":"f07373","icon_name":"旦","id":267707650,"name":"贺岁之迷你去钳虾～幸福带回家","tips":"贺岁之迷你去钳虾～幸福带回家"},{"description":"贺岁之蒜蓉去钳虾～快乐带回家","icon_color":"f07373","icon_name":"快","id":267703538,"name":"贺岁之蒜蓉去钳虾～快乐带回家","tips":"贺岁之蒜蓉去钳虾～快乐带回家"},{"description":"贺岁之麻辣去钳虾～半价带回家","icon_color":"f07373","icon_name":"乐","id":267700426,"name":"贺岁之麻辣去钳虾～半价带回家","tips":"贺岁之麻辣去钳虾～半价带回家"}],"address":"北京市东城区崇文门外大街18号1幢LG-D9","albums":[{"count":1,"cover_image_hash":"bfa41a6b39e960522c0edd3a0b0a2591jpeg","name":"门面","photos":[{"description":"门头照","id":5574212,"image_hash":"bfa41a6b39e960522c0edd3a0b0a2591jpeg","type":"FRONT"}]},{"count":1,"cover_image_hash":"545a50e88454f0f566edb2d7fb3ed7d6jpeg","name":"大堂","photos":[{"description":"店内照","id":5574213,"image_hash":"545a50e88454f0f566edb2d7fb3ed7d6jpeg","type":"HALL"}]}],"authentic_id":1392250334645944,"closing_count_down":0,"delivery_mode":{"border":"","color":"2395FF","gradient":{"rgb_from":"00AAFF","rgb_to":"0085FF"},"id":1,"is_solid":true,"text":"蜂鸟专送","text_color":"FFFFFF"},"description":"热辣生活是全国著名餐饮品牌麻辣诱惑旗下的熟食连锁品牌。产品涵盖卤味、精美凉菜、热食、饮品等。 品牌创建于2010年7月，产品类别30个以上，品牌追求实惠、便捷、多样的现代饮食方式；","distance":0,"favored":false,"float_delivery_fee":6,"float_minimum_order_amount":20,"id":150135844,"image_path":"d3317704c6e007088bf0f87b5f19c6fcpng","is_new":false,"is_premium":true,"is_stock_empty":0,"is_valid":1,"latitude":39.898515,"longitude":116.419283,"max_applied_quantity_per_order":1,"name":"热辣生活·麻辣诱惑(崇文门店)","next_business_time":"","only_use_poi":false,"opening_hours":["09:30/21:50"],"order_lead_time":20,"phone":"87555705","piecewise_agent_fee":{"description":"配送费¥6","extra_fee":1,"is_extra":true,"rules":[{"fee":6,"price":20}],"tips":"配送费¥6"},"promotion_info":"麻辣诱惑旗下品牌，主营小龙虾、各式新鲜卤味等菜品~  目前仅支持电子发票。(小龙虾/大闸蟹/皮皮虾等热食可以备注加热哦！)","qualification":{"link":"https://h5.ele.me/shop/certification/#/?restaurant_id=1392250334645944&realId=150135844","safety_description":"甲级商家"},"rating":4.8,"rating_count":65,"recent_order_num":129,"recommend":{"is_ad":false,"reason":""},"regular_customer_count":0,"scheme":"eleme://catering?restaurant_id=150135844","shop_sign":{"brand_story":"热辣生活，隶属于北京麻辣诱惑食品有限公司，主营业务有实体门店和线上外卖，主打品类有“麻小”白鳃小龙虾、“柳爷精酿”啤酒及各种卤制鲜食等，致力于为顾客提供餐桌食品的最佳解决方案。","image_hash":"8590a16898ddb0e37f78685fb575f936png"},"status":4,"supports":[{"description":"该商家支持开发票，开票订单金额1元起，请在下单时填写好发票抬头","icon_color":"999999","icon_name":"票","id":4,"name":"开发票"}],"type":0,"weight":{"basic":20000,"maximum":20000,"unit":20000,"unit_fee":20000}}';
 
    	}
    	
    	$get = I('get.');
    	
    	
    	//dump($get);
    	
    	
    	
    	
    	
    }
    
    
}