import React from 'react'

const Footer = () => {
  return (
    
<footer class="bg-gray-200 ">
    <div class="mx-auto w-full max-w-screen-xl">
      <div style={{letterSpacing:"0.05rem"}} class="grid grid-cols-3 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 text-center">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">USE INVOICE GENERATOR</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Invoice Template</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">How to Use</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Release Notes</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Developer API</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">EDUCATION</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Invoicing Guide</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">© 2012-2023 Invoice-Generator.com</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms of Use</a>
                </li>
            </ul>
        </div>
        
    </div>
    </div>
</footer>

  )
}

export default Footer
