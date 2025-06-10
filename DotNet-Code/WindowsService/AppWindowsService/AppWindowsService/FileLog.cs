using System;
using System.IO;

namespace AppWindowsService
{
    public static class FileLog
    {
        public static void LogToFile(this string text)
        {
            string filePath = AppDomain.CurrentDomain.BaseDirectory + "\\aaa.log";
            if (!File.Exists(filePath))
            {
                using (StreamWriter sw = File.CreateText(filePath))
                {
                    sw.WriteLine(text);
                }
            }
            else
            {
                using (StreamWriter sw = File.AppendText(filePath))
                {
                    sw.WriteLine(text);
                }
            }
        }
    }
}
