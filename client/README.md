# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Database Schema:
    data = {
        'name':'',
        'category':"",
        'tags':'',
        "desc":"",
        'basePrice':"",
        'rating':'',
        'discount':"40%",
        'variants':[{
            "var_name":"name of the variant",
            'var_url':"endpoints of the url",
            'var_gallery':['array of image gallery'],
            'var_color':"",
        }],
    }

 <!-- furni1 = [
   '3d model', //base model
] -->
