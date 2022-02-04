using PDFGenerator.Models;
using System.Text;

namespace PDF_Generator.Utility
{
    public static class TemplateGenerator
    {
        public static string GetHTMLString(PDFData data)
        {
            var sb = new StringBuilder();
            sb.Append(@"
                        <html>
                            <head>
                            </head>
                            <body>
                                <div><h1>First Name: " + data.FirstName + "</h1> </div>" + 
                                "<div><h1>Surname: " + data.Surname + "</h1></div> <br> <div><h1>Body: " + data.Body + "</h1></div></body>");
            return sb.ToString();
        }
    }
}