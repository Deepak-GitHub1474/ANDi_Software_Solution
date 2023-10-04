# ANDi Software Solution

### Setup instructions:

1. Clone the project
    ```
        git clone https://github.com/Deepak-GitHub1474/ANDi_Software_Solution.git
    ```
2. Move into the directory
    ```
        cd ANDi_Software
    ```
3. Install dependencies
    ```
        npm i
    ```

4. Run the server
    ```
        npm run dev
    ```

## Setting tailwind css with vite project

### Check official documentation of tailwind for step by step setup [Link] ↓
(https://tailwindcss.com/docs/guides/vite)

### Adding plugins and dependencies
    ```
        npm install  react-router-dom react-icons daisyui  @tailwindcss/line-clamp
    ```

### Install daisyUI as a Tailwind CSS plugin

1. Install daisyUI
    ```
        npm i -D daisyui@latest
    ```
 2. Then add daisyUI to your tailwind.config.js file
    ```
        module.exports = {
                //...
                plugins: [require("daisyui")],
            }
    ```