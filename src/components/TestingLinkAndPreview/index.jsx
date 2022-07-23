
export function TestingLinkAndPreview({
  module,
  func
}) {
  return (
    <>
      <p>
        This <code>
          _.{func}
        </code>{' '} function is 100% covered by tests. See them and contribute at {' '}
        <a href={`https://github.com/rayepps/radash/blob/master/src/tests/${module}.test.ts`}>GitHub</a>.
      </p>
    </>
  )
}
