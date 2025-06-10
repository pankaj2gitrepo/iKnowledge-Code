using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using System;
using System.IO;

namespace JsonOperations
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"***** Json Schema from string variable *****");
            string schemaJson = @"{
                'description': 'A person',
                'type': 'object',
                'properties':
                {
                    'name': {'type':'string'},
                    'hobbies': {
                        'type': 'array',
                        'items': {'type':'string'}
                    }
                }
            }";

            JSchema schemaFromString = JSchema.Parse(schemaJson);
            JToken person = JToken.Parse(@"{
                'name': 'James',
                'hobbies': ['.NET', 'Blogging', 'Reading', 'Xbox', 'LOLCATS']
            }");

            bool isValid = person.IsValid(schemaFromString);
            Console.WriteLine($"isValid: {isValid}");

            Console.WriteLine($"***** Json Schema from string variable *****");
            JSchema schemaFromFile = null;
            using (TextReader reader = File.OpenText($@"{Directory.GetCurrentDirectory()}\Resources\labresult.schema.json"))
            {
                JSchemaUrlResolver resolver = new JSchemaUrlResolver();
                schemaFromFile = JSchema.Load(new JsonTextReader(reader));
            }

            Console.Read();
        }
    }
}
