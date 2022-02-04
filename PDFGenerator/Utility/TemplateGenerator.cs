using PDFGenerator.Models;
using System.Text;

namespace PDF_Generator.Utility
{
    public static class TemplateGenerator
    {
        public static string GetHTMLString(PDFData data)
        {
            var sb = new StringBuilder();
            sb.Append($@"
                        <html>
                            <head>
                            </head>
                            <body>
                                <h1>Employee Details</h1>
                                <div>
                                    <p><span>First Name:</span> {data.FirstName} </p>
                                    <p><span>Surname:</span> {data.Surname}</p>
                                    <p><span>Job Title:</span> {data.Body}</p>
                                </div>
                            </body>
                         </html>");
            return sb.ToString();
        }
    }
}