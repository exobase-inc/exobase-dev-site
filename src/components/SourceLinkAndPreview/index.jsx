
export function SourceLinkAndPreview({
  module,
  func
}) {
  return (
    <>
      <p>
        See the source for {' '}
        <code>
          _.{func}
        </code>{' '}
        on <a href={`https://github.com/rayepps/radash/blob/master/src/${module}.ts`}>GitHub</a>.
      </p>
    </>
  )
}
