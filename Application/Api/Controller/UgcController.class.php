<?php
namespace Api\Controller;
use Think\Controller;
class UgcController extends Controller {
    public function v2(){
      
    	$restaurants = I('restaurants');
    	$ratings = I('ratings');

    	header("Content-type: text/html; charset=utf-8");
    	//has_content=true&tag_name=全部&offset=00&limit=10
    	
    	$has_content = $_GET['has_content'];
    	$tag_name = $_GET['tag_name'];
    	$offset = $_GET['offset'];
    	$limit = $_GET['limit'];
    	
    	if($ratings == 'tags'){
    		echo '[{"count":2849,"name":"全部","unsatisfied":false},{"count":2810,"name":"满意","unsatisfied":false},{"count":39,"name":"不满意","unsatisfied":true},{"count":114,"name":"有图","unsatisfied":false}]';
    		exit;
    	}
    	if($ratings == 'scores'){
    		echo '{"compare_rating":0.8096632503660323,"deliver_time":33,"food_score":4.63206,"order_rating_amount":96,"overall_score":4.78715,"service_score":4.94225}';
    		exit;
        }
        
    	
    	switch ($tag_name) {
    		case '有图':
    		echo '[{"avatar":"","highlights":[],"item_ratings":[{"food_id":560403479,"food_name":"蒜蓉去钳虾小份（150g）","image_hash":"be39c269a8c5475621e44cb2516859fcjpeg","is_valid":1}],"rated_at":"2017-10-16","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555983485,"food_name":"麻辣土豆片（220g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555987077,"food_name":"麻辣牛蹄筋（140g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555987082,"food_name":"麻辣海白菜（160g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555984570,"food_name":"麻辣藕片（180g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555985414,"food_name":"鲜椒百叶（140g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555985413,"food_name":"麻辣鸡翅尖（160g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1}],"rated_at":"2017-10-14","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"}]';
    		exit;
    		break;
    		
    		case '满意':
    			echo '[{"avatar":"","highlights":[],"item_ratings":[{"food_id":555987080,"food_name":"麻辣鱼豆腐（200g）","image_hash":"","is_valid":1},{"food_id":555987081,"food_name":"麻辣小竹笋（140g）","image_hash":"","is_valid":1},{"food_id":555987082,"food_name":"麻辣海白菜（160g）","image_hash":"","is_valid":1},{"food_id":695463683,"food_name":"麻辣兔头（1个>80g）","image_hash":"","is_valid":1},{"food_id":555985412,"food_name":"豉香鸡脆骨（140g）","image_hash":"","is_valid":1}],"rated_at":"2018-01-06","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555983476,"food_name":"麻辣去钳虾大份（250g）","image_hash":"","is_valid":1}],"rated_at":"2018-01-03","rating_star":5,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555986221,"food_name":"麻辣豆皮（180g）","image_hash":"","is_valid":1},{"food_id":682779280,"food_name":"小香辣皮皮虾（300g）","image_hash":"","is_valid":1}],"rated_at":"2018-01-02","rating_star":4,"rating_text":"很快很好，好","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555985411,"food_name":"麻辣猪手（半个＞180g）","image_hash":"","is_valid":1},{"food_id":692147428,"food_name":"麻辣鱿鱼须（200g）","image_hash":"","is_valid":1},{"food_id":555985413,"food_name":"麻辣鸡翅尖（160g）","image_hash":"","is_valid":1},{"food_id":555987080,"food_name":"麻辣鱼豆腐（200g）","image_hash":"","is_valid":1},{"food_id":555987081,"food_name":"麻辣小竹笋（140g）","image_hash":"","is_valid":1},{"food_id":555982509,"food_name":"五香酥鱼（140g）","image_hash":"","is_valid":1},{"food_id":690762289,"food_name":"麻辣魔芋丝（200g）","image_hash":"","is_valid":1},{"food_id":690770772,"food_name":"棒棒鸡（250g）","image_hash":"","is_valid":1},{"food_id":555983485,"food_name":"麻辣土豆片（220g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-31","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":682779280,"food_name":"小香辣皮皮虾（300g）","image_hash":"","is_valid":1},{"food_id":555979911,"food_name":"麻辣鸭脖（220g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-31","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555986217,"food_name":"麻辣鸭板肠（110g）","image_hash":"","is_valid":1},{"food_id":555986221,"food_name":"麻辣豆皮（180g）","image_hash":"","is_valid":1},{"food_id":555983485,"food_name":"麻辣土豆片（220g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-30","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555983479,"food_name":"微辣鸭脖（220g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-30","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[],"rated_at":"2017-12-29","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555985414,"food_name":"鲜椒百叶（140g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-28","rating_star":5,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555985412,"food_name":"豉香鸡脆骨（140g）","image_hash":"","is_valid":1},{"food_id":555987082,"food_name":"麻辣海白菜（160g）","image_hash":"","is_valid":1},{"food_id":690770772,"food_name":"棒棒鸡（250g）","image_hash":"","is_valid":1},{"food_id":555984566,"food_name":"麻辣牛肚（120g）","image_hash":"","is_valid":1},{"food_id":555984570,"food_name":"麻辣藕片（180g）","image_hash":"","is_valid":1},{"food_id":555983483,"food_name":"爽口裙带菜（180g）","image_hash":"","is_valid":1}],"rated_at":"2017-12-26","rating_star":5,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"}]';
    			exit;
    			break;
    		
    		case '不满意':
    			echo '[]';
    			exit;
    			break;
    			
            default:
            //这里是所有的评价
            echo '[{"avatar":"","highlights":[],"item_ratings":[{"food_id":560403479,"food_name":"蒜蓉去钳虾小份（150g）","image_hash":"be39c269a8c5475621e44cb2516859fcjpeg","is_valid":1}],"rated_at":"2017-10-16","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"},{"avatar":"","highlights":[],"item_ratings":[{"food_id":555983485,"food_name":"麻辣土豆片（220g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555987077,"food_name":"麻辣牛蹄筋（140g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555987082,"food_name":"麻辣海白菜（160g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555984570,"food_name":"麻辣藕片（180g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555985414,"food_name":"鲜椒百叶（140g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1},{"food_id":555985413,"food_name":"麻辣鸡翅尖（160g）","image_hash":"550bf5fc54843a249f9e25d511bd775cjpeg","is_valid":1}],"rated_at":"2017-10-14","rating_star":4,"rating_text":"","tags":[],"time_spent_desc":"","username":"匿名用户"}]';
    		exit;
            
    		break;
    	}
    	
    	
    	
    	
    }
}