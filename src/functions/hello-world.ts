interface HelloWorldProps {
  name: string | null
}

/**
 * A simple hello world function
 * @param {string} [name]
 * @returns {string} Hello World | Hello 'name'
 */
export function helloWorld({ name }: HelloWorldProps) {
  if (name) {
    return `Hello ${name}`
  }
  return 'Hello World'
}
