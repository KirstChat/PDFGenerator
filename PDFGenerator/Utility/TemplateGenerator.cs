using System.Text;

namespace PDF_Generator.Utility
{
    public static class TemplateGenerator
    {
        public static string GetHTMLString(string data)
        {
            var sb = new StringBuilder();
            sb.Append(@"
                        <html>
                            <head>
                            </head>
                            <body>
                                <div class='header'><h1>This is the generated PDF report!!!</h1></div>
                                <h1>"+ data + "</h1></body>");
            return sb.ToString();
        }
    }
}