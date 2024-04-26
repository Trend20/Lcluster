const Recommend = () =>{
    return(
        <div>
            <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">AI Prompt System</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                   htmlFor="prompt">
                                Enter your prompt:
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="prompt"
                                placeholder="Type your prompt here..."
                                rows={3}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                                type="submit"
                            >
                                Generate Response
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 p-4 bg-gray-100 rounded-md dark:bg-gray-700">
                        <h2 className="text-lg font-bold mb-2 dark:text-gray-200">AI Response:</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            This is a sample AI response. The actual response from the AI model will be displayed here.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Recommend;