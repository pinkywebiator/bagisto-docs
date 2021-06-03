/* set version */
let version = '1.x';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    {
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([
            ['introduction/requirements', 'Requirements'],
            ['introduction/installation', 'Installation'],
            ['introduction/upgrade_to_latest_bagisto', 'Upgrade Bagisto'],
            ['introduction/folders', 'Directory structure'],
            ['introduction/docker', 'Docker']
            
        ])
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/create_package', 'Create a new package'],
            ['packages/create_migrations', 'Create migrations'],
            ['packages/add_menu_in_admin', 'Add menu in admin'],
            ['packages/create_acl', 'Access control list'],
            ['packages/create_custom_configuration', 'Create custom configuration'],
            ['packages/create_models', 'Create models'],
            ['packages/store_data_through_repositories', 'Store data through repositories'],
        ])
    },
    {
        title: 'Advanced Topics',
        path: setVersionPrefix('advanced'),
        collapsable: true,
        children: setVersionPrefix([
            ['advanced/create_shipping_method', 'Create a shipping method'],
            ['advanced/create_payment_method', 'Create a payment method'],
            ['advanced/create_product_type', 'Create your own product type'],
            ['advanced/datagrid', 'DataGrid'],
            ['advanced/events', 'Events'],
            ['advanced/override-core-model', 'Override core models'],
            ['advanced/security_practice', 'Best Security Practices'],
            ['advanced/render_event', 'View render event'],
            ['advanced/indexing-products-to-elasticsearch.md', 'Indexing products to Elasticsearch'],
        ])
    },           
    {
        title: 'Themes',
        path: setVersionPrefix('themes'),
        collapsable: true,
        children: setVersionPrefix([
            ['themes/tracer', 'Blade file tracer'],
            ['themes/create_theme', 'Create a store theme'],
            ['themes/create_admin_theme', 'Create an admin theme'],
            ['themes/change-email-template.md', 'Change email template'],
            ['themes/customize-hompepage-menu.md', 'Customize homepage menu'],
            ['themes/integrate-image-search-in-theme', 'Integrate image search in theme']
        ])
    },
    {
        title: 'Translations',
        path: setVersionPrefix('translations/translation_based_on_locale'),
        collapsable: true,
        children: setVersionPrefix([
            ['translations/translation_based_on_locale', 'Translation based on locale'],
            ['translations/change_the_language_of_error_validations_on_your_store', 'Change the language of error validations on your store']
        ])
    },
    {
        title: 'User Guides',
        path: setVersionPrefix('user_guides'),
        collapsable: true,
        children: setVersionPrefix([
            ['user_guides/tax-rates', 'Tax Rates'],
            ['user_guides/cart_rule', 'Cart rules'],
            ['user_guides/social_auth', 'Social Authentication']
        ])
    }, 
    {
        title: 'Bagisto Web API',
        path: setVersionPrefix('api'),
        collapsable: true,
        children: setVersionPrefix([
            ['api/getting-started-with-the-api', 'Authentication'],
            ['api/customers', 'Customers'],
            ['api/locales', 'Locales'],
            ['api/addresses', 'Addresses'],
            ['api/products', 'Products'],
            ['api/categories', 'Categories'],
            ['api/attributes', 'Attributes'],
            ['api/attribute-families', 'Attribute Families'],
            ['api/cart', 'Shopping Cart'],
            ['api/orders', 'Orders'],
            ['api/invoices', 'Invoices'],
            ['api/shipments', 'Shipments'],
            ['api/transactions', 'Transactions'],
            ['api/reviews', 'Reviews'],
            ['api/wishlists', 'Wishlists'],
        ])
    },
    {
        title: 'Bagisto GraphQL Admin API',
        path: setVersionPrefix('graphql_admin_api'),
        collapsable: true,
        children: setVersionPrefix([
            ['graphql_admin_api/getting-started-with-the-api.md', 'Authentication'],
            ['graphql_admin_api/settings.md', 'Settings'],
            ['graphql_admin_api/cms.md', 'CMS'],
            ['graphql_admin_api/velocity.md', 'Velocity'],
            ['graphql_admin_api/customers.md', 'Customers'],
            ['graphql_admin_api/promotions.md', 'Promotions'],
            ['graphql_admin_api/products.md', 'Products'],
            ['graphql_admin_api/categories.md', 'Categories'],
            ['graphql_admin_api/attributes.md', 'Attributes'],
            ['graphql_admin_api/attribute_groups.md', 'Attribute Groups'],
            ['graphql_admin_api/attribute_families.md', 'Attribute Families'],
            ['graphql_admin_api/sales.md', 'Sales'],
        ])
    },
    {
        title: 'Bagisto GraphQL Shop API',
        path: setVersionPrefix('graphql_shop_api'),
        collapsable: true,
        children: setVersionPrefix([
            ['graphql_shop_api/getting-started-with-the-api.md', 'Authentication'],
            ['graphql_shop_api/addresses.md', 'Addresses'],
            ['graphql_shop_api/orders.md', 'Orders'],
            ['graphql_shop_api/reviews.md', 'Reviews'],
            ['graphql_shop_api/wishlists.md', 'Wishlists'],
            ['graphql_shop_api/compare.md', 'Compare'],
            ['graphql_shop_api/downloadable_links.md', 'Downloadable Links'],
            ['graphql_shop_api/cart.md', 'Cart'],
            ['graphql_shop_api/checkout.md', 'Checkout Process'],
            ['graphql_shop_api/homepage.md', 'Home Page'],
        ])
    },
]