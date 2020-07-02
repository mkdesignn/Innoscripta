<?php

use App\Model\Category;
use App\Model\Product;
use App\Model\ProductCategory;
use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'BBQ Chicken pizza',
                'avatar' => 'bbq-chicken-pizza.jpeg',
                'content' => 'A rich helping of BBQ sauce, BBQ Chicken, red onions, and Italian parsley.',
                'prepare_time' => '30',
                'weight' => '350',
                'ingredients' => json_encode(['1 pound boneless skinless chicken breasts, cut into 1-inch pieces', '1 tablespoon olive oil', '1 prebaked 12-inch pizza crust', '1/4 cup prepared pesto', '1 large tomato, chopped', '1/2 cup canned black beans, rinsed and drained', '1 cup shredded part-skim mozzarella cheese', '1/2 cup shredded Parmesan cheese']),
                'price' => '29',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Cheese pizza',
                'avatar' => 'cheese-pizza.jpeg',
                'content' => 'Our delicious, hand tossed, thin crust pizza dough, smothered with our fresh sauce and covered in our NY cheese blend.',
                'prepare_time' => '20',
                'weight' => '280',
                'ingredients' => json_encode(['Basic pizza dough', 'Pizza sauce', 'Cheese']),
                'price' => '18',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'hawaiian pizza',
                'avatar' => 'hawaiian-pizza.jpeg',
                'content' => 'Aloha. Featuring Canadian Bacon and pineapple',
                'prepare_time' => '20',
                'weight' => '310',
                'ingredients' => json_encode(['1/2 recipe homemade pizza crust', '1/2 cup (127g) pizza sauce (homemade or store-bought)', '1 and 1/2 cups (6oz or 168g) shredded mozzarella cheese', '1/2 cup (75g) cooked ham or Canadian bacon, sliced or chopped', '1/2 cup (82g) pineapple chunks (canned or fresh)', '3 slices bacon, cooked and crumbled']),
                'price' => '25',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Meat lovers pizza',
                'avatar' => 'meat-lovers-pizza.jpeg',
                'content' => 'Pepperoni, Italian Sausage, and Meatballs. Rich in protein.',
                'prepare_time' => '30',
                'weight' => '400',
                'ingredients' => json_encode(['1/2 recipe Homemade Pizza Sauce (or you can use store-bought)', '2 cups shredded mozzarella cheese', '1/3 cup shredded parmesan cheese', 'Pepperoni Slices', '1 Ib. Hot Italian Sausage, cooked and crumbled', '3-4 slices of crispy bacon, crumbled']),
                'price' => '31',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Pepperoni and jalapeno pizza',
                'avatar' => 'pepperoni-and-jalapeno-pizza.jpeg',
                'content' => 'Spicy and delicious featuring fresh jalapeño.',
                'prepare_time' => '30',
                'weight' => '300',
                'ingredients' => json_encode(['14 ounces whole peeled tomatoes ; not including juices', '1 tablespoon Olive oil', '1 teaspoon Dried basil', '1/2 teaspoon Kosher Salt', '1/4 teaspoon Ground black pepper', '1 whole Pizza dough', '8 ounces shredded cheese']),
                'price' => '24',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Pepperoni pizza',
                'avatar' => 'pepperoni-pizza.jpeg',
                'content' => 'A tried and true classic made with a healthy portion of pepperoni.',
                'prepare_time' => '30',
                'weight' => '350',
                'ingredients' => json_encode(['1/2 cup tomato sauce', '1/2 teaspoon kosher salt', '1/2 teaspoon ground black pepper', '1/2 teaspoon granulated garlic', '1/2 teaspoon granulated onion', '1/4 teaspoon red pepper flakes', '1 teaspoon olive oil']),
                'price' => '23',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Vegan cheese pizza',
                'avatar' => 'vegan-cheese-pizza.jpeg',
                'content' => 'Featuring our premium Daiya Vegan Cheese Blend.',
                'prepare_time' => '30',
                'weight' => '320',
                'ingredients' => json_encode(['1 teaspoon yeast', '1 teaspoon honey or sugar', '1 teaspoon salt', '2 tablespoons fresh herbs (omit if you don’t have any)', '3/4 cup warm water', '2 cup all purpose flour']),
                'price' => '23',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'Veggie-pizza',
                'avatar' => 'veggie-pizza.jpeg',
                'content' => 'Go Green. Featuring black olives, mushrooms, bell pepper, red onions, and fresh chopped garlic.',
                'prepare_time' => '30',
                'weight' => '360',
                'ingredients' => json_encode(['2 (8 ounce) packages refrigerated crescent rolls', '1 cup sour cream', '1 (8 ounce) package cream cheese, softened', '1 teaspoon dried dill weed', '¼ teaspoon garlic salt', '1 (1 ounce) package ranch dressing mix', '1 small onion, finely chopped', '1 stalk celery, thinly sliced', '½ cup halved and thinly-sliced radishes', '1 red bell pepper, chopped', '1 ½ cups fresh broccoli, chopped', '1 carrot, grated']),
                'price' => '23',
                'status' => 'approved',
                'visible' => true
            ],
            [
                'name' => 'White pizza',
                'avatar' => 'white-pizza.jpeg',
                'content' => 'Fresh chopped garlic, Italian parsley, topped with a healthy amount of Ricotta cheese.',
                'prepare_time' => '30',
                'weight' => '360',
                'ingredients' => json_encode(['1 lb. pizza dough, divided in half Vegetable oil, for brushing Coarse cornmeal, for sprinkling', '1/4 c. extra-virgin olive oil', '4 cloves garlic, thinly sliced1 1/2 c. ricotta', '1/2 tsp. kosher salt', '1/2 tsp. freshly ground black pepper', '1 tbsp. freshly chopped oregano', '1 tsp. freshly chopped thyme', '2 c. shredded mozzarella, divided 1/4 c. pecorino Romano, divided Crushed red pepper flakes, for garnish']),
                'price' => '23',
                'status' => 'approved',
                'visible' => true
            ]
        ];

        $pizzaCategoryId = Category::whereName('pizza')->first()->id;
        foreach($products as $product){
            $product = factory(Product::class)->create($product);
            $product->category()->attach($pizzaCategoryId);
        }
    }
}
