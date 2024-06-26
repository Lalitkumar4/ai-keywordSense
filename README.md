# AI KeywordSense Tool

This tool uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/text-generation/completions-api) to extract the most relevant keywords from a given text. It is built with React and Chakra UI. To generate keywords, simply enter your text in the textarea field, and click on the generate keyword button and the tool will generate keywords for you.

## ⚙️ Technologies Used
- `ReactJS`
- `Chakra UI`
- `Framer motion`
- `Vite`

## Getting Started
#### Install dependencies:
```
npm install
```

#### Set up environment variables:
Create a `.env` file in the root directory and add your OpenAI API key:

Get your key at 👉 https://platform.openai.com/account/api-keys
```
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_OPENAI_API_URL=https://api.openai.com/v1/completions
```
#### Run dev server: (http://localhost:3000)
```
npm run dev
```
#### Build for production
```
npm run build
```

## License
This project is under the MIT License.

