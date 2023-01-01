
function ShowPDF(){
    const fs = require('fs')
    const pdfParse = require('pdf-parse')
    const getPDF = async (file) => {
      let readFileSync = fs.readFileSync(file)
      try {
        let pdfExtract = await pdfParse(readFileSync)
        console.log('File content: ', pdfExtract.text)
        console.log('Total pages: ', pdfExtract.numpages)
        console.log('All content: ', pdfExtract.info)
      } catch (error) {
        throw new Error(error)
      }
    }
    const pdfRead = '/public/cv.pdf'
    getPDF(pdfRead)
}

export default ShowPDF;