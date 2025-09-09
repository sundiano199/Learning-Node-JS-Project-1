CREATE A REACT APP
npm create vite@latest
 .
 npm install
 npm run dev

CUSTOMIZING A REACT APP
index.html (title, icon)
css files (cleared the app.css and index.css)
App.jsx (cleraed and create your own)

CREATE A COMPONENT
Rules of JSX
1. components must start with capital Letter e.g Navbar, Footer
2. return one parent element (div, section etc <></>)
3. class for styling in react is called className
4. every element / tag must be closed e.g <br /> <img />

WORKING WITH STYLES 
1. inline style ({})
2. external stylesheet (you must import the stylesheet)
3. tailwind css (install, configure the vite.config, import the css (index.css))


Working with Images
1. images on the web
2. images on our devices (assets)
    a. move the image files into the assets (images)
    b. the image has to be imported in to the component

DYNAMIC VALUES (work with JS in react)
you must surround that js with {}

Reusable components
PROPS - pass data to a components

pass the data into the tag <Child data= {data} />
recieve the data - props are accepted as object {image='', title=''}

<Product title price image />

Outputting List (arrays)
[ {image, title,}]
mapping over an arrays
each element being returned must have a unique key prop (index)

EVENT HANDLIMG

CONDITIONAL RENDERING - displaying differnt UIs based on conditions

cart empty (cart is empty) and filled (products you want to buy)

1. multiple returns (if statements)
if(condition){
    do sth
}
2. ternary operators 
condition ? first : second

isLoggedIn ? log out : lo gin
3. short circuit eveluation 
 true && hello
 did not got to yaba && ikeja


STATE MANGEMNET
const [age, setAge] = useState(45)
setAge(65)

const [proflePicture, setProfilePicture] = useState(null)
setProfilePicture(image)


blog post 
heading
body  {short : expanded}

i a a bo.... read mor

johndoe@google.com --- > j*@gmail.com



installing third party packages
package.json -> dependencies

to install 
npm install packageName

to uninstall 
npm uninstall packageName